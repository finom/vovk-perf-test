import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jgps")
export default class JgpController {
  @operation({
    summary: "Get Jgps",
  })
  @get()
  static getJgps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jgp",
  })
  @post("{id}")
  static createJgp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
