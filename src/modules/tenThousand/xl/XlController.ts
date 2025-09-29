import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("xls")
export default class XlController {
  @operation({
    summary: "Get Xls",
  })
  @get()
  static getXls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Xl",
  })
  @post("{id}")
  static createXl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
