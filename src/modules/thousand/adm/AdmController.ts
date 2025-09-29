import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("adms")
export default class AdmController {
  @operation({
    summary: "Get Adms",
  })
  @get()
  static getAdms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Adm",
  })
  @post("{id}")
  static createAdm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
