import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mvbs")
export default class MvbController {
  @operation({
    summary: "Get Mvbs",
  })
  @get()
  static getMvbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mvb",
  })
  @post("{id}")
  static createMvb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
