import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("clxes")
export default class ClxController {
  @operation({
    summary: "Get Clxes",
  })
  @get()
  static getClxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Clx",
  })
  @post("{id}")
  static createClx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
