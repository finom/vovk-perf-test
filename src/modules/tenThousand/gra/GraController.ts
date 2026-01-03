import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gras")
export default class GraController {
  @operation({
    summary: "Get Gras",
  })
  @get()
  static getGras = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gra",
  })
  @post("{id}")
  static createGra = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
