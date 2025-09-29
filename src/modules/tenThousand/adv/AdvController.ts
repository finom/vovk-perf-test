import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("advs")
export default class AdvController {
  @operation({
    summary: "Get Advs",
  })
  @get()
  static getAdvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Adv",
  })
  @post("{id}")
  static createAdv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
