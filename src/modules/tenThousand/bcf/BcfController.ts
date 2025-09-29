import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bcfs")
export default class BcfController {
  @operation({
    summary: "Get Bcfs",
  })
  @get()
  static getBcfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bcf",
  })
  @post("{id}")
  static createBcf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
