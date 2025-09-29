import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hcqs")
export default class HcqController {
  @operation({
    summary: "Get Hcqs",
  })
  @get()
  static getHcqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hcq",
  })
  @post("{id}")
  static createHcq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
