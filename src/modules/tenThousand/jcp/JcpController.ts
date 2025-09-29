import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jcps")
export default class JcpController {
  @operation({
    summary: "Get Jcps",
  })
  @get()
  static getJcps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jcp",
  })
  @post("{id}")
  static createJcp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
