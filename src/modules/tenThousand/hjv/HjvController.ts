import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hjvs")
export default class HjvController {
  @operation({
    summary: "Get Hjvs",
  })
  @get()
  static getHjvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hjv",
  })
  @post("{id}")
  static createHjv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
