import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("agies")
export default class AgyController {
  @operation({
    summary: "Get Agies",
  })
  @get()
  static getAgies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Agy",
  })
  @post("{id}")
  static createAgy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
