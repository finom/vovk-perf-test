import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kzxes")
export default class KzxController {
  @operation({
    summary: "Get Kzxes",
  })
  @get()
  static getKzxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kzx",
  })
  @post("{id}")
  static createKzx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
