import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("icrs")
export default class IcrController {
  @operation({
    summary: "Get Icrs",
  })
  @get()
  static getIcrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Icr",
  })
  @post("{id}")
  static createIcr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
