import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nsses")
export default class NssController {
  @operation({
    summary: "Get Nsses",
  })
  @get()
  static getNsses = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nss",
  })
  @post("{id}")
  static createNss = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
