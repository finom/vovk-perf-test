import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nsds")
export default class NsdController {
  @operation({
    summary: "Get Nsds",
  })
  @get()
  static getNsds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nsd",
  })
  @post("{id}")
  static createNsd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
