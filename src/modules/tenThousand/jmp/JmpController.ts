import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jmps")
export default class JmpController {
  @operation({
    summary: "Get Jmps",
  })
  @get()
  static getJmps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jmp",
  })
  @post("{id}")
  static createJmp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
