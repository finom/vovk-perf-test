import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gfos")
export default class GfoController {
  @operation({
    summary: "Get Gfos",
  })
  @get()
  static getGfos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gfo",
  })
  @post("{id}")
  static createGfo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
