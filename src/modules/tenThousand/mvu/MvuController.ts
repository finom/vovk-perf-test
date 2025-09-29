import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mvus")
export default class MvuController {
  @operation({
    summary: "Get Mvus",
  })
  @get()
  static getMvus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mvu",
  })
  @post("{id}")
  static createMvu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
