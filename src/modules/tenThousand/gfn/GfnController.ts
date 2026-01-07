import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gfn")
export default class GfnController {
  @operation({
    summary: "Get Gfn",
  })
  @get()
  static getGfn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gfn",
  })
  @post("{id}")
  static createGfn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
