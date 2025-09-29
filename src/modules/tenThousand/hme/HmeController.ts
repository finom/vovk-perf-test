import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hmes")
export default class HmeController {
  @operation({
    summary: "Get Hmes",
  })
  @get()
  static getHmes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hme",
  })
  @post("{id}")
  static createHme = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
