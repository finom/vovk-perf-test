import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("sus")
export default class SuController {
  @operation({
    summary: "Get Sus",
  })
  @get()
  static getSus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Su",
  })
  @post("{id}")
  static createSu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
