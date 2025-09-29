import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kzzes")
export default class KzzController {
  @operation({
    summary: "Get Kzzes",
  })
  @get()
  static getKzzes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kzz",
  })
  @post("{id}")
  static createKzz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
