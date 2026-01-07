import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gfa")
export default class GfaController {
  @operation({
    summary: "Get Gfa",
  })
  @get()
  static getGfa = procedure({
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
