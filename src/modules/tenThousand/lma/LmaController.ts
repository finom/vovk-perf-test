import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lmas")
export default class LmaController {
  @operation({
    summary: "Get Lmas",
  })
  @get()
  static getLmas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lma",
  })
  @post("{id}")
  static createLma = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
