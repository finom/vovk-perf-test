import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dmcs")
export default class DmcController {
  @operation({
    summary: "Get Dmcs",
  })
  @get()
  static getDmcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dmc",
  })
  @post("{id}")
  static createDmc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
