import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gum")
export default class GumController {
  @operation({
    summary: "Get Gum",
  })
  @get()
  static getGum = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gum",
  })
  @post("{id}")
  static createGum = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
