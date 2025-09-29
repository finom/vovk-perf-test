import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("blqs")
export default class BlqController {
  @operation({
    summary: "Get Blqs",
  })
  @get()
  static getBlqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Blq",
  })
  @post("{id}")
  static createBlq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
