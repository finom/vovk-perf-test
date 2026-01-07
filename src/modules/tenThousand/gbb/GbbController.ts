import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gbb")
export default class GbbController {
  @operation({
    summary: "Get Gbb",
  })
  @get()
  static getGbb = procedure({
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
