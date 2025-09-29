import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kjxes")
export default class KjxController {
  @operation({
    summary: "Get Kjxes",
  })
  @get()
  static getKjxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kjx",
  })
  @post("{id}")
  static createKjx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
