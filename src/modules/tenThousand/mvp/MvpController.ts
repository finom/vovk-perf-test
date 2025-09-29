import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mvps")
export default class MvpController {
  @operation({
    summary: "Get Mvps",
  })
  @get()
  static getMvps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mvp",
  })
  @post("{id}")
  static createMvp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
