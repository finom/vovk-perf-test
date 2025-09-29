import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("geps")
export default class GepController {
  @operation({
    summary: "Get Geps",
  })
  @get()
  static getGeps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gep",
  })
  @post("{id}")
  static createGep = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
