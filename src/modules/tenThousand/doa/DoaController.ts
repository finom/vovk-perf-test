import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("doas")
export default class DoaController {
  @operation({
    summary: "Get Doas",
  })
  @get()
  static getDoas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Doa",
  })
  @post("{id}")
  static createDoa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
