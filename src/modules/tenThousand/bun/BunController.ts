import { procedure, prefix, get, post, operation } from "vovk";

@prefix("buns")
export default class BunController {
  @operation({
    summary: "Get Buns",
  })
  @get()
  static getBuns = procedure({
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
