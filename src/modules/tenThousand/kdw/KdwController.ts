import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kdws")
export default class KdwController {
  @operation({
    summary: "Get Kdws",
  })
  @get()
  static getKdws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kdw",
  })
  @post("{id}")
  static createKdw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
