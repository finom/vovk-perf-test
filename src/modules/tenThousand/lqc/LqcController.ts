import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lqcs")
export default class LqcController {
  @operation({
    summary: "Get Lqcs",
  })
  @get()
  static getLqcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lqc",
  })
  @post("{id}")
  static createLqc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
