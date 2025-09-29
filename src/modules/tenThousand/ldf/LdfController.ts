import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ldfs")
export default class LdfController {
  @operation({
    summary: "Get Ldfs",
  })
  @get()
  static getLdfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ldf",
  })
  @post("{id}")
  static createLdf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
