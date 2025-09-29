import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ncs")
export default class NcController {
  @operation({
    summary: "Get Ncs",
  })
  @get()
  static getNcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nc",
  })
  @post("{id}")
  static createNc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
