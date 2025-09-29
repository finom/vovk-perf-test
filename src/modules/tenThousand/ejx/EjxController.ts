import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ejxes")
export default class EjxController {
  @operation({
    summary: "Get Ejxes",
  })
  @get()
  static getEjxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ejx",
  })
  @post("{id}")
  static createEjx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
