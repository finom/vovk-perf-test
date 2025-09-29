import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("njbs")
export default class NjbController {
  @operation({
    summary: "Get Njbs",
  })
  @get()
  static getNjbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Njb",
  })
  @post("{id}")
  static createNjb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
