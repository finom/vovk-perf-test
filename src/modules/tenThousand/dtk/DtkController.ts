import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dtks")
export default class DtkController {
  @operation({
    summary: "Get Dtks",
  })
  @get()
  static getDtks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dtk",
  })
  @post("{id}")
  static createDtk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
