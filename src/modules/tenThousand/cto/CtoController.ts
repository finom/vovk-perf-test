import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ctos")
export default class CtoController {
  @operation({
    summary: "Get Ctos",
  })
  @get()
  static getCtos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cto",
  })
  @post("{id}")
  static createCto = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
