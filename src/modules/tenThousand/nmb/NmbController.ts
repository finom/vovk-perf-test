import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nmbs")
export default class NmbController {
  @operation({
    summary: "Get Nmbs",
  })
  @get()
  static getNmbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nmb",
  })
  @post("{id}")
  static createNmb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
