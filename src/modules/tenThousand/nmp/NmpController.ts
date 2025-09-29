import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nmps")
export default class NmpController {
  @operation({
    summary: "Get Nmps",
  })
  @get()
  static getNmps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nmp",
  })
  @post("{id}")
  static createNmp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
