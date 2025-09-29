import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hcjs")
export default class HcjController {
  @operation({
    summary: "Get Hcjs",
  })
  @get()
  static getHcjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hcj",
  })
  @post("{id}")
  static createHcj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
