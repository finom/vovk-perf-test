import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dnjs")
export default class DnjController {
  @operation({
    summary: "Get Dnjs",
  })
  @get()
  static getDnjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dnj",
  })
  @post("{id}")
  static createDnj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
