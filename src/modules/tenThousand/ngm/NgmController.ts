import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ngms")
export default class NgmController {
  @operation({
    summary: "Get Ngms",
  })
  @get()
  static getNgms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ngm",
  })
  @post("{id}")
  static createNgm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
