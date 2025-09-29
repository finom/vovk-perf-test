import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ljus")
export default class LjuController {
  @operation({
    summary: "Get Ljus",
  })
  @get()
  static getLjus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lju",
  })
  @post("{id}")
  static createLju = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
