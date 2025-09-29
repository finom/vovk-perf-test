import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ikxes")
export default class IkxController {
  @operation({
    summary: "Get Ikxes",
  })
  @get()
  static getIkxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ikx",
  })
  @post("{id}")
  static createIkx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
