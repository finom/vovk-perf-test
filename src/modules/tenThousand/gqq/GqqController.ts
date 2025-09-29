import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gqqs")
export default class GqqController {
  @operation({
    summary: "Get Gqqs",
  })
  @get()
  static getGqqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gqq",
  })
  @post("{id}")
  static createGqq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
