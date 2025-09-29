import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mzgs")
export default class MzgController {
  @operation({
    summary: "Get Mzgs",
  })
  @get()
  static getMzgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mzg",
  })
  @post("{id}")
  static createMzg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
