import { procedure, prefix, get, post, operation } from "vovk";

@prefix("blt")
export default class BltController {
  @operation({
    summary: "Get Blt",
  })
  @get()
  static getBlt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Blt",
  })
  @post("{id}")
  static createBlt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
