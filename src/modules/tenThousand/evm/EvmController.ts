import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("evms")
export default class EvmController {
  @operation({
    summary: "Get Evms",
  })
  @get()
  static getEvms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Evm",
  })
  @post("{id}")
  static createEvm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
