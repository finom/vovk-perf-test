import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nsqs")
export default class NsqController {
  @operation({
    summary: "Get Nsqs",
  })
  @get()
  static getNsqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nsq",
  })
  @post("{id}")
  static createNsq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
