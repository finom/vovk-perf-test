import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mmes")
export default class MmeController {
  @operation({
    summary: "Get Mmes",
  })
  @get()
  static getMmes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mme",
  })
  @post("{id}")
  static createMme = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
