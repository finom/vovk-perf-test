import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nszs")
export default class NszController {
  @operation({
    summary: "Get Nszs",
  })
  @get()
  static getNszs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nsz",
  })
  @post("{id}")
  static createNsz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
