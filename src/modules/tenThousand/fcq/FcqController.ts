import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fcqs")
export default class FcqController {
  @operation({
    summary: "Get Fcqs",
  })
  @get()
  static getFcqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fcq",
  })
  @post("{id}")
  static createFcq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
