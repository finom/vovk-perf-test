import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mdqs")
export default class MdqController {
  @operation({
    summary: "Get Mdqs",
  })
  @get()
  static getMdqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mdq",
  })
  @post("{id}")
  static createMdq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
