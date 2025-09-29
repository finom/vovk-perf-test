import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eeps")
export default class EepController {
  @operation({
    summary: "Get Eeps",
  })
  @get()
  static getEeps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eep",
  })
  @post("{id}")
  static createEep = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
