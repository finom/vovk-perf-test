import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eets")
export default class EetController {
  @operation({
    summary: "Get Eets",
  })
  @get()
  static getEets = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eet",
  })
  @post("{id}")
  static createEet = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
