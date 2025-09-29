import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ilws")
export default class IlwController {
  @operation({
    summary: "Get Ilws",
  })
  @get()
  static getIlws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ilw",
  })
  @post("{id}")
  static createIlw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
