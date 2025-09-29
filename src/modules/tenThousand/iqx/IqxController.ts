import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iqxes")
export default class IqxController {
  @operation({
    summary: "Get Iqxes",
  })
  @get()
  static getIqxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iqx",
  })
  @post("{id}")
  static createIqx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
