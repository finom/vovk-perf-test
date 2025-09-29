import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nabs")
export default class NabController {
  @operation({
    summary: "Get Nabs",
  })
  @get()
  static getNabs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nab",
  })
  @post("{id}")
  static createNab = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
