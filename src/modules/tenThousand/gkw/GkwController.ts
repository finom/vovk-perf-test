import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gkws")
export default class GkwController {
  @operation({
    summary: "Get Gkws",
  })
  @get()
  static getGkws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gkw",
  })
  @post("{id}")
  static createGkw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
