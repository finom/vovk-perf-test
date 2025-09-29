import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("goas")
export default class GoaController {
  @operation({
    summary: "Get Goas",
  })
  @get()
  static getGoas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Goa",
  })
  @post("{id}")
  static createGoa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
