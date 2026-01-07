import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bfx")
export default class BfxController {
  @operation({
    summary: "Get Bfx",
  })
  @get()
  static getBfx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bfx",
  })
  @post("{id}")
  static createBfx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
