import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("alzs")
export default class AlzController {
  @operation({
    summary: "Get Alzs",
  })
  @get()
  static getAlzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Alz",
  })
  @post("{id}")
  static createAlz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
