import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fgs")
export default class FgsController {
  @operation({
    summary: "Get Fgs",
  })
  @get()
  static getFgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fgs",
  })
  @post("{id}")
  static createFgs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
