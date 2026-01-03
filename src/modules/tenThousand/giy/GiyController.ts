import { procedure, prefix, get, post, operation } from "vovk";

@prefix("giys")
export default class GiyController {
  @operation({
    summary: "Get Giys",
  })
  @get()
  static getGiys = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Giy",
  })
  @post("{id}")
  static createGiy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
