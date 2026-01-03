import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bbls")
export default class BblController {
  @operation({
    summary: "Get Bbls",
  })
  @get()
  static getBbls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bbl",
  })
  @post("{id}")
  static createBbl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
