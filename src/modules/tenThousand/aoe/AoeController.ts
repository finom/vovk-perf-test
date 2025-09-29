import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aoes")
export default class AoeController {
  @operation({
    summary: "Get Aoes",
  })
  @get()
  static getAoes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aoe",
  })
  @post("{id}")
  static createAoe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
