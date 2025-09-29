import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kqxes")
export default class KqxController {
  @operation({
    summary: "Get Kqxes",
  })
  @get()
  static getKqxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kqx",
  })
  @post("{id}")
  static createKqx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
