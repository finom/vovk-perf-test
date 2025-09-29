import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mtks")
export default class MtkController {
  @operation({
    summary: "Get Mtks",
  })
  @get()
  static getMtks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mtk",
  })
  @post("{id}")
  static createMtk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
