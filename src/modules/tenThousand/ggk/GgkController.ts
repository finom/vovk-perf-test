import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ggks")
export default class GgkController {
  @operation({
    summary: "Get Ggks",
  })
  @get()
  static getGgks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ggk",
  })
  @post("{id}")
  static createGgk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
