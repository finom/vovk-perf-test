import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hths")
export default class HthController {
  @operation({
    summary: "Get Hths",
  })
  @get()
  static getHths = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hth",
  })
  @post("{id}")
  static createHth = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
