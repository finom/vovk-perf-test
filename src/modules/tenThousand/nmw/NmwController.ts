import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nmws")
export default class NmwController {
  @operation({
    summary: "Get Nmws",
  })
  @get()
  static getNmws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nmw",
  })
  @post("{id}")
  static createNmw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
