import { procedure, prefix, get, post, operation } from "vovk";

@prefix("xls")
export default class XlController {
  @operation({
    summary: "Get Xls",
  })
  @get()
  static getXls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Xl",
  })
  @post("{id}")
  static createXl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
