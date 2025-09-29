import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nsks")
export default class NskController {
  @operation({
    summary: "Get Nsks",
  })
  @get()
  static getNsks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nsk",
  })
  @post("{id}")
  static createNsk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
