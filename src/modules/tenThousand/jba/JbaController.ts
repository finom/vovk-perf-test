import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jbas")
export default class JbaController {
  @operation({
    summary: "Get Jbas",
  })
  @get()
  static getJbas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jba",
  })
  @post("{id}")
  static createJba = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
