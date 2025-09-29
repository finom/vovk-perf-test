import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ddas")
export default class DdaController {
  @operation({
    summary: "Get Ddas",
  })
  @get()
  static getDdas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dda",
  })
  @post("{id}")
  static createDda = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
