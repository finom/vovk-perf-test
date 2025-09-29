import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("asqs")
export default class AsqController {
  @operation({
    summary: "Get Asqs",
  })
  @get()
  static getAsqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Asq",
  })
  @post("{id}")
  static createAsq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
