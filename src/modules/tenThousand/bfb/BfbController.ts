import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bfb")
export default class BfbController {
  @operation({
    summary: "Get Bfb",
  })
  @get()
  static getBfb = procedure({
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
