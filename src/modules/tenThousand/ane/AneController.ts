import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("anes")
export default class AneController {
  @operation({
    summary: "Get Anes",
  })
  @get()
  static getAnes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ane",
  })
  @post("{id}")
  static createAne = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
