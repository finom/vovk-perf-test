import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nsns")
export default class NsnController {
  @operation({
    summary: "Get Nsns",
  })
  @get()
  static getNsns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nsn",
  })
  @post("{id}")
  static createNsn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
