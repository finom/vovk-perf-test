import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mvqs")
export default class MvqController {
  @operation({
    summary: "Get Mvqs",
  })
  @get()
  static getMvqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mvq",
  })
  @post("{id}")
  static createMvq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
