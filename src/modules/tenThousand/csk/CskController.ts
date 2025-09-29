import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("csks")
export default class CskController {
  @operation({
    summary: "Get Csks",
  })
  @get()
  static getCsks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Csk",
  })
  @post("{id}")
  static createCsk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
