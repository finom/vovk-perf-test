import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("guas")
export default class GuaController {
  @operation({
    summary: "Get Guas",
  })
  @get()
  static getGuas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gua",
  })
  @post("{id}")
  static createGua = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
