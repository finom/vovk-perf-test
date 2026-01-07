import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bfp")
export default class BfpController {
  @operation({
    summary: "Get Bfp",
  })
  @get()
  static getBfp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bfp",
  })
  @post("{id}")
  static createBfp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
