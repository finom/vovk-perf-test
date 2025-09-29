import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dkks")
export default class DkkController {
  @operation({
    summary: "Get Dkks",
  })
  @get()
  static getDkks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dkk",
  })
  @post("{id}")
  static createDkk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
