import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nkts")
export default class NktController {
  @operation({
    summary: "Get Nkts",
  })
  @get()
  static getNkts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nkt",
  })
  @post("{id}")
  static createNkt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
