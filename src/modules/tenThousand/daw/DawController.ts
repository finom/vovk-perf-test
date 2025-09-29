import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("daws")
export default class DawController {
  @operation({
    summary: "Get Daws",
  })
  @get()
  static getDaws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Daw",
  })
  @post("{id}")
  static createDaw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
