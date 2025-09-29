import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jbfs")
export default class JbfController {
  @operation({
    summary: "Get Jbfs",
  })
  @get()
  static getJbfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jbf",
  })
  @post("{id}")
  static createJbf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
