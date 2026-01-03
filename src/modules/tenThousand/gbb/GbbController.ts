import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gbbs")
export default class GbbController {
  @operation({
    summary: "Get Gbbs",
  })
  @get()
  static getGbbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gbb",
  })
  @post("{id}")
  static createGbb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
