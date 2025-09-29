import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aegs")
export default class AegController {
  @operation({
    summary: "Get Aegs",
  })
  @get()
  static getAegs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aeg",
  })
  @post("{id}")
  static createAeg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
