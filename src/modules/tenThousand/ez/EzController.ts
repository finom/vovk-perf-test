import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ezs")
export default class EzController {
  @operation({
    summary: "Get Ezs",
  })
  @get()
  static getEzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ez",
  })
  @post("{id}")
  static createEz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
