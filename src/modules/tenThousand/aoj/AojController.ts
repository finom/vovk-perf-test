import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aojs")
export default class AojController {
  @operation({
    summary: "Get Aojs",
  })
  @get()
  static getAojs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aoj",
  })
  @post("{id}")
  static createAoj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
