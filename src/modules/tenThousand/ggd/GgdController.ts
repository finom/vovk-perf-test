import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ggds")
export default class GgdController {
  @operation({
    summary: "Get Ggds",
  })
  @get()
  static getGgds = procedure({
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
