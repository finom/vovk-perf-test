import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jnes")
export default class JneController {
  @operation({
    summary: "Get Jnes",
  })
  @get()
  static getJnes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jne",
  })
  @post("{id}")
  static createJne = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
