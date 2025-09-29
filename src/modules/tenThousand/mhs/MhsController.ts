import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mhs")
export default class MhsController {
  @operation({
    summary: "Get Mhs",
  })
  @get()
  static getMhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mhs",
  })
  @post("{id}")
  static createMhs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
