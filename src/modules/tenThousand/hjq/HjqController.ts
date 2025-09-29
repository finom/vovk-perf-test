import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hjqs")
export default class HjqController {
  @operation({
    summary: "Get Hjqs",
  })
  @get()
  static getHjqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hjq",
  })
  @post("{id}")
  static createHjq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
