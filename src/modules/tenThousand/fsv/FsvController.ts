import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fsvs")
export default class FsvController {
  @operation({
    summary: "Get Fsvs",
  })
  @get()
  static getFsvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fsv",
  })
  @post("{id}")
  static createFsv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
