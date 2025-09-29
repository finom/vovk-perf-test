import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hjs")
export default class HjsController {
  @operation({
    summary: "Get Hjs",
  })
  @get()
  static getHjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hjs",
  })
  @post("{id}")
  static createHjs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
