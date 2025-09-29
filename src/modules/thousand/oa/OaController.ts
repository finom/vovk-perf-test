import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("oas")
export default class OaController {
  @operation({
    summary: "Get Oas",
  })
  @get()
  static getOas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Oa",
  })
  @post("{id}")
  static createOa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
