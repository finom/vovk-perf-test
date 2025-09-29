import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nmts")
export default class NmtController {
  @operation({
    summary: "Get Nmts",
  })
  @get()
  static getNmts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nmt",
  })
  @post("{id}")
  static createNmt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
