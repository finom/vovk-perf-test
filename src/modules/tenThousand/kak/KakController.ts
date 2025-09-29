import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kaks")
export default class KakController {
  @operation({
    summary: "Get Kaks",
  })
  @get()
  static getKaks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kak",
  })
  @post("{id}")
  static createKak = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
