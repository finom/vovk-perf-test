import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hjxes")
export default class HjxController {
  @operation({
    summary: "Get Hjxes",
  })
  @get()
  static getHjxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hjx",
  })
  @post("{id}")
  static createHjx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
