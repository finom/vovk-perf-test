import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("enus")
export default class EnuController {
  @operation({
    summary: "Get Enus",
  })
  @get()
  static getEnus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Enu",
  })
  @post("{id}")
  static createEnu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
