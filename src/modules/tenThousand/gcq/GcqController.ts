import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gcqs")
export default class GcqController {
  @operation({
    summary: "Get Gcqs",
  })
  @get()
  static getGcqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gcq",
  })
  @post("{id}")
  static createGcq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
