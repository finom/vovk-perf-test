import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nsxes")
export default class NsxController {
  @operation({
    summary: "Get Nsxes",
  })
  @get()
  static getNsxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nsx",
  })
  @post("{id}")
  static createNsx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
