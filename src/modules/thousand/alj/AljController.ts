import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aljs")
export default class AljController {
  @operation({
    summary: "Get Aljs",
  })
  @get()
  static getAljs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Alj",
  })
  @post("{id}")
  static createAlj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
