import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nrvs")
export default class NrvController {
  @operation({
    summary: "Get Nrvs",
  })
  @get()
  static getNrvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nrv",
  })
  @post("{id}")
  static createNrv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
