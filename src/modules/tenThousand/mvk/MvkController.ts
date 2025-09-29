import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mvks")
export default class MvkController {
  @operation({
    summary: "Get Mvks",
  })
  @get()
  static getMvks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mvk",
  })
  @post("{id}")
  static createMvk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
