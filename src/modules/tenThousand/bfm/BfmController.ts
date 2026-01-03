import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bfms")
export default class BfmController {
  @operation({
    summary: "Get Bfms",
  })
  @get()
  static getBfms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bfm",
  })
  @post("{id}")
  static createBfm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
