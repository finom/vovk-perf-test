import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gbls")
export default class GblController {
  @operation({
    summary: "Get Gbls",
  })
  @get()
  static getGbls = procedure({
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
