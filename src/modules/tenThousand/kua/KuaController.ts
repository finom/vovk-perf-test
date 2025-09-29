import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kuas")
export default class KuaController {
  @operation({
    summary: "Get Kuas",
  })
  @get()
  static getKuas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kua",
  })
  @post("{id}")
  static createKua = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
