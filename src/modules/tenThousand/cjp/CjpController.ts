import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cjps")
export default class CjpController {
  @operation({
    summary: "Get Cjps",
  })
  @get()
  static getCjps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cjp",
  })
  @post("{id}")
  static createCjp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
