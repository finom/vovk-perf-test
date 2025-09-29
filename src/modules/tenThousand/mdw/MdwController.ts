import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mdws")
export default class MdwController {
  @operation({
    summary: "Get Mdws",
  })
  @get()
  static getMdws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mdw",
  })
  @post("{id}")
  static createMdw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
