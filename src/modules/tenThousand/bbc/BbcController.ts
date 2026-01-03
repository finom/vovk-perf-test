import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bbcs")
export default class BbcController {
  @operation({
    summary: "Get Bbcs",
  })
  @get()
  static getBbcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bbc",
  })
  @post("{id}")
  static createBbc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
