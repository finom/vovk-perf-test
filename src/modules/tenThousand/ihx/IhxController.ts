import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ihxes")
export default class IhxController {
  @operation({
    summary: "Get Ihxes",
  })
  @get()
  static getIhxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ihx",
  })
  @post("{id}")
  static createIhx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
