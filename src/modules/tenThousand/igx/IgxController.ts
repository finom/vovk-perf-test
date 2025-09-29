import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("igxes")
export default class IgxController {
  @operation({
    summary: "Get Igxes",
  })
  @get()
  static getIgxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Igx",
  })
  @post("{id}")
  static createIgx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
