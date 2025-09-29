import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nmhs")
export default class NmhController {
  @operation({
    summary: "Get Nmhs",
  })
  @get()
  static getNmhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nmh",
  })
  @post("{id}")
  static createNmh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
