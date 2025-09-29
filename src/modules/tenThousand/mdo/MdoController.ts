import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mdos")
export default class MdoController {
  @operation({
    summary: "Get Mdos",
  })
  @get()
  static getMdos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mdo",
  })
  @post("{id}")
  static createMdo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
