import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cqxes")
export default class CqxController {
  @operation({
    summary: "Get Cqxes",
  })
  @get()
  static getCqxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cqx",
  })
  @post("{id}")
  static createCqx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
