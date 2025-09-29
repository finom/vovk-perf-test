import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fkds")
export default class FkdController {
  @operation({
    summary: "Get Fkds",
  })
  @get()
  static getFkds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fkd",
  })
  @post("{id}")
  static createFkd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
