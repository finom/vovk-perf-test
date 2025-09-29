import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("alxes")
export default class AlxController {
  @operation({
    summary: "Get Alxes",
  })
  @get()
  static getAlxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Alx",
  })
  @post("{id}")
  static createAlx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
