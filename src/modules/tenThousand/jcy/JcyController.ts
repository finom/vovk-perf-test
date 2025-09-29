import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jcies")
export default class JcyController {
  @operation({
    summary: "Get Jcies",
  })
  @get()
  static getJcies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jcy",
  })
  @post("{id}")
  static createJcy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
