import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dfos")
export default class DfoController {
  @operation({
    summary: "Get Dfos",
  })
  @get()
  static getDfos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dfo",
  })
  @post("{id}")
  static createDfo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
