import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nmzs")
export default class NmzController {
  @operation({
    summary: "Get Nmzs",
  })
  @get()
  static getNmzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nmz",
  })
  @post("{id}")
  static createNmz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
