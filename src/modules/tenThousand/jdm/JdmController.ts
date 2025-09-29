import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jdms")
export default class JdmController {
  @operation({
    summary: "Get Jdms",
  })
  @get()
  static getJdms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jdm",
  })
  @post("{id}")
  static createJdm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
