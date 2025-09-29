import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bqxes")
export default class BqxController {
  @operation({
    summary: "Get Bqxes",
  })
  @get()
  static getBqxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bqx",
  })
  @post("{id}")
  static createBqx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
