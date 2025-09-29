import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hjs")
export default class HjController {
  @operation({
    summary: "Get Hjs",
  })
  @get()
  static getHjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hj",
  })
  @post("{id}")
  static createHj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
