import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("juds")
export default class JudController {
  @operation({
    summary: "Get Juds",
  })
  @get()
  static getJuds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jud",
  })
  @post("{id}")
  static createJud = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
