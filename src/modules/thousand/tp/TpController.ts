import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("tps")
export default class TpController {
  @operation({
    summary: "Get Tps",
  })
  @get()
  static getTps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Tp",
  })
  @post("{id}")
  static createTp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
