import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jps")
export default class JpController {
  @operation({
    summary: "Get Jps",
  })
  @get()
  static getJps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jp",
  })
  @post("{id}")
  static createJp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
