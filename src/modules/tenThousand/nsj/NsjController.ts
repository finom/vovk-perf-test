import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nsjs")
export default class NsjController {
  @operation({
    summary: "Get Nsjs",
  })
  @get()
  static getNsjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nsj",
  })
  @post("{id}")
  static createNsj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
