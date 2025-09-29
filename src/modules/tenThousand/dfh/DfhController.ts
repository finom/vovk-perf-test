import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dfhs")
export default class DfhController {
  @operation({
    summary: "Get Dfhs",
  })
  @get()
  static getDfhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dfh",
  })
  @post("{id}")
  static createDfh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
