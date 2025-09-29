import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("agus")
export default class AguController {
  @operation({
    summary: "Get Agus",
  })
  @get()
  static getAgus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Agu",
  })
  @post("{id}")
  static createAgu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
