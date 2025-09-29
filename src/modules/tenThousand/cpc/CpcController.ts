import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cpcs")
export default class CpcController {
  @operation({
    summary: "Get Cpcs",
  })
  @get()
  static getCpcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cpc",
  })
  @post("{id}")
  static createCpc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
