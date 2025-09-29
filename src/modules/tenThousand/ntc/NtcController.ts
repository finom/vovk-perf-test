import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ntcs")
export default class NtcController {
  @operation({
    summary: "Get Ntcs",
  })
  @get()
  static getNtcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ntc",
  })
  @post("{id}")
  static createNtc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
