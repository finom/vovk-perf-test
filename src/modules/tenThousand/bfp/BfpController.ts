import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bfps")
export default class BfpController {
  @operation({
    summary: "Get Bfps",
  })
  @get()
  static getBfps = procedure({
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
