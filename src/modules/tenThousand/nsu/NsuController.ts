import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nsus")
export default class NsuController {
  @operation({
    summary: "Get Nsus",
  })
  @get()
  static getNsus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nsu",
  })
  @post("{id}")
  static createNsu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
