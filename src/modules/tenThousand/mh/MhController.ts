import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mhs")
export default class MhController {
  @operation({
    summary: "Get Mhs",
  })
  @get()
  static getMhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mh",
  })
  @post("{id}")
  static createMh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
