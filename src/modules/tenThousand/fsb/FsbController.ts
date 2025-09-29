import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fsbs")
export default class FsbController {
  @operation({
    summary: "Get Fsbs",
  })
  @get()
  static getFsbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fsb",
  })
  @post("{id}")
  static createFsb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
