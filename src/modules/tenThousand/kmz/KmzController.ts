import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kmzs")
export default class KmzController {
  @operation({
    summary: "Get Kmzs",
  })
  @get()
  static getKmzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kmz",
  })
  @post("{id}")
  static createKmz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
