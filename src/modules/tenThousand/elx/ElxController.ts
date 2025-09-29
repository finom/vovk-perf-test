import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("elxes")
export default class ElxController {
  @operation({
    summary: "Get Elxes",
  })
  @get()
  static getElxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Elx",
  })
  @post("{id}")
  static createElx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
