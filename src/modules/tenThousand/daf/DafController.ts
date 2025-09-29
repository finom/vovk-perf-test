import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dafs")
export default class DafController {
  @operation({
    summary: "Get Dafs",
  })
  @get()
  static getDafs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Daf",
  })
  @post("{id}")
  static createDaf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
