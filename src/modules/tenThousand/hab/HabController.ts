import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("habs")
export default class HabController {
  @operation({
    summary: "Get Habs",
  })
  @get()
  static getHabs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hab",
  })
  @post("{id}")
  static createHab = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
