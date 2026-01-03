import { procedure, prefix, get, post, operation } from "vovk";

@prefix("buks")
export default class BukController {
  @operation({
    summary: "Get Buks",
  })
  @get()
  static getBuks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Buk",
  })
  @post("{id}")
  static createBuk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
