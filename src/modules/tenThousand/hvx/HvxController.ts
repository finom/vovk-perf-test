import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hvxes")
export default class HvxController {
  @operation({
    summary: "Get Hvxes",
  })
  @get()
  static getHvxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hvx",
  })
  @post("{id}")
  static createHvx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
