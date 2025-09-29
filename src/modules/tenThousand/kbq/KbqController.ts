import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kbqs")
export default class KbqController {
  @operation({
    summary: "Get Kbqs",
  })
  @get()
  static getKbqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kbq",
  })
  @post("{id}")
  static createKbq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
