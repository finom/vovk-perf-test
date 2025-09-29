import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("acqs")
export default class AcqController {
  @operation({
    summary: "Get Acqs",
  })
  @get()
  static getAcqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Acq",
  })
  @post("{id}")
  static createAcq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
