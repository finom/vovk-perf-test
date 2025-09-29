import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mucs")
export default class MucController {
  @operation({
    summary: "Get Mucs",
  })
  @get()
  static getMucs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Muc",
  })
  @post("{id}")
  static createMuc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
