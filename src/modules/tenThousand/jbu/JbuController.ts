import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jbus")
export default class JbuController {
  @operation({
    summary: "Get Jbus",
  })
  @get()
  static getJbus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jbu",
  })
  @post("{id}")
  static createJbu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
