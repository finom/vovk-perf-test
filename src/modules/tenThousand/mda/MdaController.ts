import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mdas")
export default class MdaController {
  @operation({
    summary: "Get Mdas",
  })
  @get()
  static getMdas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mda",
  })
  @post("{id}")
  static createMda = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
