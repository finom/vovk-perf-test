import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kmws")
export default class KmwController {
  @operation({
    summary: "Get Kmws",
  })
  @get()
  static getKmws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kmw",
  })
  @post("{id}")
  static createKmw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
