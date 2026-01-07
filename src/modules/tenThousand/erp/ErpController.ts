import { procedure, prefix, get, post, operation } from "vovk";

@prefix("erp")
export default class ErpController {
  @operation({
    summary: "Get Erp",
  })
  @get()
  static getErp = procedure({
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
