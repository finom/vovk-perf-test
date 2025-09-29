import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cucs")
export default class CucController {
  @operation({
    summary: "Get Cucs",
  })
  @get()
  static getCucs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cuc",
  })
  @post("{id}")
  static createCuc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
