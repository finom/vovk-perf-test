import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cuqs")
export default class CuqController {
  @operation({
    summary: "Get Cuqs",
  })
  @get()
  static getCuqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cuq",
  })
  @post("{id}")
  static createCuq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
