import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mnrs")
export default class MnrController {
  @operation({
    summary: "Get Mnrs",
  })
  @get()
  static getMnrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mnr",
  })
  @post("{id}")
  static createMnr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
