import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ilas")
export default class IlaController {
  @operation({
    summary: "Get Ilas",
  })
  @get()
  static getIlas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ila",
  })
  @post("{id}")
  static createIla = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
