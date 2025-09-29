import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hqxes")
export default class HqxController {
  @operation({
    summary: "Get Hqxes",
  })
  @get()
  static getHqxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hqx",
  })
  @post("{id}")
  static createHqx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
