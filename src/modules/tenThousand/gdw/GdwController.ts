import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gdw")
export default class GdwController {
  @operation({
    summary: "Get Gdw",
  })
  @get()
  static getGdw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gdw",
  })
  @post("{id}")
  static createGdw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
