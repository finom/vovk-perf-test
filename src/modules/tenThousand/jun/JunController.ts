import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("juns")
export default class JunController {
  @operation({
    summary: "Get Juns",
  })
  @get()
  static getJuns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jun",
  })
  @post("{id}")
  static createJun = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
