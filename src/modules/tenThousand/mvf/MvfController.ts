import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mvfs")
export default class MvfController {
  @operation({
    summary: "Get Mvfs",
  })
  @get()
  static getMvfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mvf",
  })
  @post("{id}")
  static createMvf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
