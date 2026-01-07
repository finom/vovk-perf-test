import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bun")
export default class BunController {
  @operation({
    summary: "Get Bun",
  })
  @get()
  static getBun = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bun",
  })
  @post("{id}")
  static createBun = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
