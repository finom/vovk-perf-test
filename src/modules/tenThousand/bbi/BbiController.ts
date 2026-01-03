import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bbis")
export default class BbiController {
  @operation({
    summary: "Get Bbis",
  })
  @get()
  static getBbis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bbi",
  })
  @post("{id}")
  static createBbi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
