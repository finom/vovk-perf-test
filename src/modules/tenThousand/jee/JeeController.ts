import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jees")
export default class JeeController {
  @operation({
    summary: "Get Jees",
  })
  @get()
  static getJees = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jee",
  })
  @post("{id}")
  static createJee = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
