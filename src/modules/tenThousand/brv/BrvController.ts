import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("brvs")
export default class BrvController {
  @operation({
    summary: "Get Brvs",
  })
  @get()
  static getBrvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Brv",
  })
  @post("{id}")
  static createBrv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
