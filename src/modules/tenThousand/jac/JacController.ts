import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jacs")
export default class JacController {
  @operation({
    summary: "Get Jacs",
  })
  @get()
  static getJacs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jac",
  })
  @post("{id}")
  static createJac = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
