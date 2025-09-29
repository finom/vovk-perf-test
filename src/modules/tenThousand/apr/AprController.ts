import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aprs")
export default class AprController {
  @operation({
    summary: "Get Aprs",
  })
  @get()
  static getAprs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Apr",
  })
  @post("{id}")
  static createApr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
