import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("abxes")
export default class AbxController {
  @operation({
    summary: "Get Abxes",
  })
  @get()
  static getAbxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Abx",
  })
  @post("{id}")
  static createAbx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
