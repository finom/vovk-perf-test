import { procedure, prefix, get, post, operation } from "vovk";

@prefix("homs")
export default class HomController {
  @operation({
    summary: "Get Homs",
  })
  @get()
  static getHoms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hom",
  })
  @post("{id}")
  static createHom = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
