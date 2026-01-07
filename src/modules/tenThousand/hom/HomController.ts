import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hom")
export default class HomController {
  @operation({
    summary: "Get Hom",
  })
  @get()
  static getHom = procedure({
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
