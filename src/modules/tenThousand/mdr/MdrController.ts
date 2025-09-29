import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mdrs")
export default class MdrController {
  @operation({
    summary: "Get Mdrs",
  })
  @get()
  static getMdrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mdr",
  })
  @post("{id}")
  static createMdr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
