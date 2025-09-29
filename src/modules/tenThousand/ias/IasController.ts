import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ias")
export default class IasController {
  @operation({
    summary: "Get Ias",
  })
  @get()
  static getIas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ias",
  })
  @post("{id}")
  static createIas = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
