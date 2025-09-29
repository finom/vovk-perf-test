import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ivxes")
export default class IvxController {
  @operation({
    summary: "Get Ivxes",
  })
  @get()
  static getIvxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ivx",
  })
  @post("{id}")
  static createIvx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
