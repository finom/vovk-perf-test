import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nons")
export default class NonController {
  @operation({
    summary: "Get Nons",
  })
  @get()
  static getNons = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Non",
  })
  @post("{id}")
  static createNon = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
