import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("igts")
export default class IgtController {
  @operation({
    summary: "Get Igts",
  })
  @get()
  static getIgts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Igt",
  })
  @post("{id}")
  static createIgt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
