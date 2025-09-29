import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jfps")
export default class JfpController {
  @operation({
    summary: "Get Jfps",
  })
  @get()
  static getJfps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jfp",
  })
  @post("{id}")
  static createJfp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
