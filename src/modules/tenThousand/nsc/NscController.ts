import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nscs")
export default class NscController {
  @operation({
    summary: "Get Nscs",
  })
  @get()
  static getNscs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nsc",
  })
  @post("{id}")
  static createNsc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
