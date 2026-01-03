import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gtos")
export default class GtoController {
  @operation({
    summary: "Get Gtos",
  })
  @get()
  static getGtos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gto",
  })
  @post("{id}")
  static createGto = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
