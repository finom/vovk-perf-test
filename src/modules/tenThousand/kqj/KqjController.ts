import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kqjs")
export default class KqjController {
  @operation({
    summary: "Get Kqjs",
  })
  @get()
  static getKqjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kqj",
  })
  @post("{id}")
  static createKqj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
