import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("juzs")
export default class JuzController {
  @operation({
    summary: "Get Juzs",
  })
  @get()
  static getJuzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Juz",
  })
  @post("{id}")
  static createJuz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
