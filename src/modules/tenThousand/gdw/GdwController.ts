import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gdws")
export default class GdwController {
  @operation({
    summary: "Get Gdws",
  })
  @get()
  static getGdws = procedure({
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
