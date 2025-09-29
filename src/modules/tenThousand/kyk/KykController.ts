import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kyks")
export default class KykController {
  @operation({
    summary: "Get Kyks",
  })
  @get()
  static getKyks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kyk",
  })
  @post("{id}")
  static createKyk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
