import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jjxes")
export default class JjxController {
  @operation({
    summary: "Get Jjxes",
  })
  @get()
  static getJjxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jjx",
  })
  @post("{id}")
  static createJjx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
