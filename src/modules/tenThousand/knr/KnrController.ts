import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("knrs")
export default class KnrController {
  @operation({
    summary: "Get Knrs",
  })
  @get()
  static getKnrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Knr",
  })
  @post("{id}")
  static createKnr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
