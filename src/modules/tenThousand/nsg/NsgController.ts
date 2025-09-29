import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nsgs")
export default class NsgController {
  @operation({
    summary: "Get Nsgs",
  })
  @get()
  static getNsgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nsg",
  })
  @post("{id}")
  static createNsg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
