import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ccqs")
export default class CcqController {
  @operation({
    summary: "Get Ccqs",
  })
  @get()
  static getCcqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ccq",
  })
  @post("{id}")
  static createCcq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
