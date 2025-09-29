import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cius")
export default class CiuController {
  @operation({
    summary: "Get Cius",
  })
  @get()
  static getCius = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ciu",
  })
  @post("{id}")
  static createCiu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
