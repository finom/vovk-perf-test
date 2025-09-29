import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iiys")
export default class IiyController {
  @operation({
    summary: "Get Iiys",
  })
  @get()
  static getIiys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iiy",
  })
  @post("{id}")
  static createIiy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
