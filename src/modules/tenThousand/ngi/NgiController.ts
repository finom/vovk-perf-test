import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ngis")
export default class NgiController {
  @operation({
    summary: "Get Ngis",
  })
  @get()
  static getNgis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ngi",
  })
  @post("{id}")
  static createNgi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
