import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("naxes")
export default class NaxController {
  @operation({
    summary: "Get Naxes",
  })
  @get()
  static getNaxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nax",
  })
  @post("{id}")
  static createNax = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
