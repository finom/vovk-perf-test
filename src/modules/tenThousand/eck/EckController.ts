import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ecks")
export default class EckController {
  @operation({
    summary: "Get Ecks",
  })
  @get()
  static getEcks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eck",
  })
  @post("{id}")
  static createEck = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
