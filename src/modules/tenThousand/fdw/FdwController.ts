import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fdws")
export default class FdwController {
  @operation({
    summary: "Get Fdws",
  })
  @get()
  static getFdws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fdw",
  })
  @post("{id}")
  static createFdw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
