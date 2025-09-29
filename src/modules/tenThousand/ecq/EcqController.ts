import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ecqs")
export default class EcqController {
  @operation({
    summary: "Get Ecqs",
  })
  @get()
  static getEcqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ecq",
  })
  @post("{id}")
  static createEcq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
