import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nshes")
export default class NshController {
  @operation({
    summary: "Get Nshes",
  })
  @get()
  static getNshes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nsh",
  })
  @post("{id}")
  static createNsh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
