import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("joxen")
export default class JoxController {
  @operation({
    summary: "Get Joxen",
  })
  @get()
  static getJoxen = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jox",
  })
  @post("{id}")
  static createJox = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
