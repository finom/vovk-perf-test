import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jcfs")
export default class JcfController {
  @operation({
    summary: "Get Jcfs",
  })
  @get()
  static getJcfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jcf",
  })
  @post("{id}")
  static createJcf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
