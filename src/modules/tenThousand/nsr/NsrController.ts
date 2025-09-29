import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nsrs")
export default class NsrController {
  @operation({
    summary: "Get Nsrs",
  })
  @get()
  static getNsrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nsr",
  })
  @post("{id}")
  static createNsr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
