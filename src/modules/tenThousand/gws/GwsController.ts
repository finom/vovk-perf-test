import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gws")
export default class GwsController {
  @operation({
    summary: "Get Gws",
  })
  @get()
  static getGws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gws",
  })
  @post("{id}")
  static createGws = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
