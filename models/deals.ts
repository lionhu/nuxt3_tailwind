import { Master } from "./master";

export interface DealIinterface {
  id: number;
  company_id: number;
  issue_date: string;
  due_date: string;
  amount: number;
  due_amount: number;
  type: string;
  partner_id: number;
  details: Array<DealDetail>;
}

// 明細行
export interface DealDetailInterface {
  id: number;
  account_item_id: number;
  tax_code: string;
  item_id: number;
  tag_ids: Array<number>;
  section_id: number;
  amount: number;
}

// 取引クラス
export class Deal implements DealIinterface {
  id: number; // 取引ID
  company_id: number; // 事業所ID
  issue_date: string; // 発生日　 (yyyy-mm-dd)
  due_date: string; // 支払期日 (yyyy-mm-dd)
  amount: number; // 金額
  due_amount: number; // 支払金額
  type: string; // 収支区分 (収入: income, 支出: expense)
  partner_id: number; // 取引先ID
  details: Array<DealDetail>;

  constructor(data: DealIinterface) {
    this.id = data.id;
    this.company_id = data.company_id;
    this.issue_date = data.issue_date;
    this.due_date = data.due_date;
    this.amount = data.amount;
    this.due_amount = data.amount;
    this.type = data.type;
    this.partner_id = data.partner_id;
    this.details = data.details.map((detail) => new DealDetail(detail));
  }

  // 一覧 /deals
  static getDeals = async (page = 50) => {
    const data = await $fetch("/api/deals");
    let model = (data as any).map((deal) => new Deal(deal));
    return model;
  };

  // 取引先名
  get partnerNeme(): string {
    return Master.getByKeyword("partner", this.partner_id);
  }

  // 収支区分 (収入: income, 支出: expense)
  get typeName(): string {
    let name: string = "";
    if (this.type == "expense") {
      name = "支出";
    } else {
      name = "収入";
    }
    return name;
  }

  // 収入か
  get isExpense(): Boolean {
    return this.type == "expense";
  }

  // 支出か
  get isIncome(): Boolean {
    return this.type == "income";
  }
}

// 取引の明細行クラス
export class DealDetail implements DealDetailInterface {
  id: number; // 取引行ID
  account_item_id: number; // 勘定科目ID
  tax_code: string; // 税区分コード
  item_id: number; // 品目ID
  tag_ids: Array<number>; // メモタグID
  section_id: number; // 部門ID
  amount: number; // 金額

  constructor(data: DealDetailInterface) {
    this.id = data.id;
    this.account_item_id = data.account_item_id;
    this.tax_code = data.tax_code;
    this.item_id = data.item_id;
    this.tag_ids = data.tag_ids;
    this.section_id = data.section_id;
    this.amount = data.amount;
  }

  // 税区分名
  get itemName(): string {
    return Master.getByKeyword("item", this.item_id);
  }

  // 勘定項目名
  get accountItemName(): string {
    return Master.getByKeyword("account", this.account_item_id);
  }

  // 部門名
  get sectionName(): string {
    return Master.getByKeyword("section", this.section_id);
  }

  // 税区分名
  get taxName(): string {
    return Master.getByKeyword("tax", this.tax_code);
  }

  // タグ名
  get tagNames(): Array<string> {
    if (this.tag_ids.length > 0) {
      return this.tag_ids.map((tag) => Master.getByKeyword("tag", tag));
    } else {
      return [];
    }
  }
}
