import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nmms")
export default class NmmController {
  @operation({
    summary: "Get Nmms",
  })
  @get()
  static getNmms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nmm",
  })
  @post("{id}")
  static createNmm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
