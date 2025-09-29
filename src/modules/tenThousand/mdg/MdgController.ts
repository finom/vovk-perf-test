import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mdgs")
export default class MdgController {
  @operation({
    summary: "Get Mdgs",
  })
  @get()
  static getMdgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mdg",
  })
  @post("{id}")
  static createMdg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
