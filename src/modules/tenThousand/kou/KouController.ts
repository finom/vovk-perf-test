import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kous")
export default class KouController {
  @operation({
    summary: "Get Kous",
  })
  @get()
  static getKous = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kou",
  })
  @post("{id}")
  static createKou = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
