import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mdzs")
export default class MdzController {
  @operation({
    summary: "Get Mdzs",
  })
  @get()
  static getMdzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mdz",
  })
  @post("{id}")
  static createMdz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
