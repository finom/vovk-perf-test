import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fos")
export default class FosController {
  @operation({
    summary: "Get Fos",
  })
  @get()
  static getFos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fos",
  })
  @post("{id}")
  static createFos = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
