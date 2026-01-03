import { procedure, prefix, get, post, operation } from "vovk";

@prefix("erps")
export default class ErpController {
  @operation({
    summary: "Get Erps",
  })
  @get()
  static getErps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Erp",
  })
  @post("{id}")
  static createErp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
