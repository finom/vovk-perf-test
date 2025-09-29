import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("abqs")
export default class AbqController {
  @operation({
    summary: "Get Abqs",
  })
  @get()
  static getAbqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Abq",
  })
  @post("{id}")
  static createAbq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
