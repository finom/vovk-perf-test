import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ggq")
export default class GgqController {
  @operation({
    summary: "Get Ggq",
  })
  @get()
  static getGgq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ggq",
  })
  @post("{id}")
  static createGgq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
