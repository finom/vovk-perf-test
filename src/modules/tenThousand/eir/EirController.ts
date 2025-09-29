import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eirs")
export default class EirController {
  @operation({
    summary: "Get Eirs",
  })
  @get()
  static getEirs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eir",
  })
  @post("{id}")
  static createEir = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
