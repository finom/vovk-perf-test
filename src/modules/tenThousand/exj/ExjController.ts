import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("exjs")
export default class ExjController {
  @operation({
    summary: "Get Exjs",
  })
  @get()
  static getExjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Exj",
  })
  @post("{id}")
  static createExj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
