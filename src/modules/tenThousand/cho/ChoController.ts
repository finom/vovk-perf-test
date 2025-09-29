import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("chos")
export default class ChoController {
  @operation({
    summary: "Get Chos",
  })
  @get()
  static getChos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cho",
  })
  @post("{id}")
  static createCho = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
