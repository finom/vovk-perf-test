import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gks")
export default class GkController {
  @operation({
    summary: "Get Gks",
  })
  @get()
  static getGks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gk",
  })
  @post("{id}")
  static createGk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
