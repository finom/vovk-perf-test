import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jhus")
export default class JhuController {
  @operation({
    summary: "Get Jhus",
  })
  @get()
  static getJhus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jhu",
  })
  @post("{id}")
  static createJhu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
