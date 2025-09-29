import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("drls")
export default class DrlController {
  @operation({
    summary: "Get Drls",
  })
  @get()
  static getDrls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Drl",
  })
  @post("{id}")
  static createDrl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
