import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ksps")
export default class KspController {
  @operation({
    summary: "Get Ksps",
  })
  @get()
  static getKsps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ksp",
  })
  @post("{id}")
  static createKsp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
