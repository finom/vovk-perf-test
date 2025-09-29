import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("emqs")
export default class EmqController {
  @operation({
    summary: "Get Emqs",
  })
  @get()
  static getEmqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Emq",
  })
  @post("{id}")
  static createEmq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
