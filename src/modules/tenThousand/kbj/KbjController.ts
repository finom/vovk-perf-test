import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kbjs")
export default class KbjController {
  @operation({
    summary: "Get Kbjs",
  })
  @get()
  static getKbjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kbj",
  })
  @post("{id}")
  static createKbj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
