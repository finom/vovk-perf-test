import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kmhs")
export default class KmhController {
  @operation({
    summary: "Get Kmhs",
  })
  @get()
  static getKmhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kmh",
  })
  @post("{id}")
  static createKmh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
