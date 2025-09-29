import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kkxes")
export default class KkxController {
  @operation({
    summary: "Get Kkxes",
  })
  @get()
  static getKkxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kkx",
  })
  @post("{id}")
  static createKkx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
