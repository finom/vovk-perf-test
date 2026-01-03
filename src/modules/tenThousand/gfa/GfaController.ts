import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gfas")
export default class GfaController {
  @operation({
    summary: "Get Gfas",
  })
  @get()
  static getGfas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gfa",
  })
  @post("{id}")
  static createGfa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
