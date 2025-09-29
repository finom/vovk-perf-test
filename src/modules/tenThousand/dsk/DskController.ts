import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dsks")
export default class DskController {
  @operation({
    summary: "Get Dsks",
  })
  @get()
  static getDsks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dsk",
  })
  @post("{id}")
  static createDsk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
