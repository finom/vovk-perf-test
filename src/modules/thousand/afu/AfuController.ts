import { procedure, prefix, get, post, operation } from "vovk";

@prefix("afus")
export default class AfuController {
  @operation({
    summary: "Get Afus",
  })
  @get()
  static getAfus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Afu",
  })
  @post("{id}")
  static createAfu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
