import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hnas")
export default class HnaController {
  @operation({
    summary: "Get Hnas",
  })
  @get()
  static getHnas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hna",
  })
  @post("{id}")
  static createHna = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
