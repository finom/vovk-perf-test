import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iwxes")
export default class IwxController {
  @operation({
    summary: "Get Iwxes",
  })
  @get()
  static getIwxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iwx",
  })
  @post("{id}")
  static createIwx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
