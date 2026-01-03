import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aucs")
export default class AucController {
  @operation({
    summary: "Get Aucs",
  })
  @get()
  static getAucs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Auc",
  })
  @post("{id}")
  static createAuc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
