import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gln")
export default class GlnController {
  @operation({
    summary: "Get Gln",
  })
  @get()
  static getGln = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gln",
  })
  @post("{id}")
  static createGln = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
