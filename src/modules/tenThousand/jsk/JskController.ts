import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jsks")
export default class JskController {
  @operation({
    summary: "Get Jsks",
  })
  @get()
  static getJsks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jsk",
  })
  @post("{id}")
  static createJsk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
