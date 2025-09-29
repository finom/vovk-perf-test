import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dsies")
export default class DsyController {
  @operation({
    summary: "Get Dsies",
  })
  @get()
  static getDsies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dsy",
  })
  @post("{id}")
  static createDsy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
