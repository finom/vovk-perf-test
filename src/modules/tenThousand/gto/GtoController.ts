import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gto")
export default class GtoController {
  @operation({
    summary: "Get Gto",
  })
  @get()
  static getGto = procedure({
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
