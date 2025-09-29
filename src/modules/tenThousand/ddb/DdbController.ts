import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ddbs")
export default class DdbController {
  @operation({
    summary: "Get Ddbs",
  })
  @get()
  static getDdbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ddb",
  })
  @post("{id}")
  static createDdb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
