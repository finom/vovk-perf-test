import { procedure, prefix, get, post, operation } from "vovk";

@prefix("grls")
export default class GrlController {
  @operation({
    summary: "Get Grls",
  })
  @get()
  static getGrls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Grl",
  })
  @post("{id}")
  static createGrl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
