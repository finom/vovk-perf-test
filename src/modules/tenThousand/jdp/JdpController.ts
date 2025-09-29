import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jdps")
export default class JdpController {
  @operation({
    summary: "Get Jdps",
  })
  @get()
  static getJdps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jdp",
  })
  @post("{id}")
  static createJdp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
