import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mvgs")
export default class MvgController {
  @operation({
    summary: "Get Mvgs",
  })
  @get()
  static getMvgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mvg",
  })
  @post("{id}")
  static createMvg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
