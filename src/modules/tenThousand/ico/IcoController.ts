import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("icos")
export default class IcoController {
  @operation({
    summary: "Get Icos",
  })
  @get()
  static getIcos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ico",
  })
  @post("{id}")
  static createIco = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
