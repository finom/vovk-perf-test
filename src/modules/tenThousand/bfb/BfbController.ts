import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bfbs")
export default class BfbController {
  @operation({
    summary: "Get Bfbs",
  })
  @get()
  static getBfbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bfb",
  })
  @post("{id}")
  static createBfb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
