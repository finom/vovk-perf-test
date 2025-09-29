import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kmrs")
export default class KmrController {
  @operation({
    summary: "Get Kmrs",
  })
  @get()
  static getKmrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kmr",
  })
  @post("{id}")
  static createKmr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
