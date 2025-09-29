import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mzps")
export default class MzpController {
  @operation({
    summary: "Get Mzps",
  })
  @get()
  static getMzps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mzp",
  })
  @post("{id}")
  static createMzp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
