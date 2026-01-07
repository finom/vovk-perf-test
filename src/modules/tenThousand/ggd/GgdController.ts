import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ggd")
export default class GgdController {
  @operation({
    summary: "Get Ggd",
  })
  @get()
  static getGgd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ggd",
  })
  @post("{id}")
  static createGgd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
