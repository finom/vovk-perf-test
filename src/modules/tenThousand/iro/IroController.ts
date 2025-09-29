import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iros")
export default class IroController {
  @operation({
    summary: "Get Iros",
  })
  @get()
  static getIros = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iro",
  })
  @post("{id}")
  static createIro = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
