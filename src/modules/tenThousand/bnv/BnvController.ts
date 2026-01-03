import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bnvs")
export default class BnvController {
  @operation({
    summary: "Get Bnvs",
  })
  @get()
  static getBnvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bnv",
  })
  @post("{id}")
  static createBnv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
