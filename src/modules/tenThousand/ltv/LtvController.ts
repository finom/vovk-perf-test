import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ltvs")
export default class LtvController {
  @operation({
    summary: "Get Ltvs",
  })
  @get()
  static getLtvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ltv",
  })
  @post("{id}")
  static createLtv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
