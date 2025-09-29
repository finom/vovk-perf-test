import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hofs")
export default class HofController {
  @operation({
    summary: "Get Hofs",
  })
  @get()
  static getHofs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hof",
  })
  @post("{id}")
  static createHof = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
