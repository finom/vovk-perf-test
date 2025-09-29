import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hlqs")
export default class HlqController {
  @operation({
    summary: "Get Hlqs",
  })
  @get()
  static getHlqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hlq",
  })
  @post("{id}")
  static createHlq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
