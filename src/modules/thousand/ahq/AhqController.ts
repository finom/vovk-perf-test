import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ahqs")
export default class AhqController {
  @operation({
    summary: "Get Ahqs",
  })
  @get()
  static getAhqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ahq",
  })
  @post("{id}")
  static createAhq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
