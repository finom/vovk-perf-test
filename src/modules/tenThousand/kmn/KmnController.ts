import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kmns")
export default class KmnController {
  @operation({
    summary: "Get Kmns",
  })
  @get()
  static getKmns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kmn",
  })
  @post("{id}")
  static createKmn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
