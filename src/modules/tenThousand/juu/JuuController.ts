import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("juus")
export default class JuuController {
  @operation({
    summary: "Get Juus",
  })
  @get()
  static getJuus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Juu",
  })
  @post("{id}")
  static createJuu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
