import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mszs")
export default class MszController {
  @operation({
    summary: "Get Mszs",
  })
  @get()
  static getMszs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Msz",
  })
  @post("{id}")
  static createMsz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
