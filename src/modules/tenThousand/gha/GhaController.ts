import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gha")
export default class GhaController {
  @operation({
    summary: "Get Gha",
  })
  @get()
  static getGha = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gha",
  })
  @post("{id}")
  static createGha = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
