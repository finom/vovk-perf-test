import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lros")
export default class LroController {
  @operation({
    summary: "Get Lros",
  })
  @get()
  static getLros = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lro",
  })
  @post("{id}")
  static createLro = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
