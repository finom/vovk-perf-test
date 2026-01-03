import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bfjs")
export default class BfjController {
  @operation({
    summary: "Get Bfjs",
  })
  @get()
  static getBfjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bfj",
  })
  @post("{id}")
  static createBfj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
