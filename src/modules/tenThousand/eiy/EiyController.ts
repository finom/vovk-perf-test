import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eiys")
export default class EiyController {
  @operation({
    summary: "Get Eiys",
  })
  @get()
  static getEiys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eiy",
  })
  @post("{id}")
  static createEiy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
