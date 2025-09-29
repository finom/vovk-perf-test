import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jdes")
export default class JdeController {
  @operation({
    summary: "Get Jdes",
  })
  @get()
  static getJdes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jde",
  })
  @post("{id}")
  static createJde = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
