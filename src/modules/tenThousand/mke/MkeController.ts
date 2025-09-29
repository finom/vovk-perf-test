import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mkes")
export default class MkeController {
  @operation({
    summary: "Get Mkes",
  })
  @get()
  static getMkes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mke",
  })
  @post("{id}")
  static createMke = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
