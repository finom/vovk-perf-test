import { procedure, prefix, get, post, operation } from "vovk";

@prefix("adm")
export default class AdmController {
  @operation({
    summary: "Get Adm",
  })
  @get()
  static getAdm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Adm",
  })
  @post("{id}")
  static createAdm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
