import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nsms")
export default class NsmController {
  @operation({
    summary: "Get Nsms",
  })
  @get()
  static getNsms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nsm",
  })
  @post("{id}")
  static createNsm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
