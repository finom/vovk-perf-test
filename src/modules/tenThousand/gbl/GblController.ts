import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gbl")
export default class GblController {
  @operation({
    summary: "Get Gbl",
  })
  @get()
  static getGbl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gbl",
  })
  @post("{id}")
  static createGbl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
