import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jeps")
export default class JepController {
  @operation({
    summary: "Get Jeps",
  })
  @get()
  static getJeps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jep",
  })
  @post("{id}")
  static createJep = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
