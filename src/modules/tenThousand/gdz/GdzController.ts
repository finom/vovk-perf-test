import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gdz")
export default class GdzController {
  @operation({
    summary: "Get Gdz",
  })
  @get()
  static getGdz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gdz",
  })
  @post("{id}")
  static createGdz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
