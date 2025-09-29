import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kmxes")
export default class KmxController {
  @operation({
    summary: "Get Kmxes",
  })
  @get()
  static getKmxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kmx",
  })
  @post("{id}")
  static createKmx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
