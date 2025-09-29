import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jyxes")
export default class JyxController {
  @operation({
    summary: "Get Jyxes",
  })
  @get()
  static getJyxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jyx",
  })
  @post("{id}")
  static createJyx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
