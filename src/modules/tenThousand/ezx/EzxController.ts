import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ezxes")
export default class EzxController {
  @operation({
    summary: "Get Ezxes",
  })
  @get()
  static getEzxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ezx",
  })
  @post("{id}")
  static createEzx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
