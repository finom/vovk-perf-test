import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fafs")
export default class FafController {
  @operation({
    summary: "Get Fafs",
  })
  @get()
  static getFafs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Faf",
  })
  @post("{id}")
  static createFaf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
