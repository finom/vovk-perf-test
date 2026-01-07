import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bix")
export default class BixController {
  @operation({
    summary: "Get Bix",
  })
  @get()
  static getBix = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bix",
  })
  @post("{id}")
  static createBix = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
