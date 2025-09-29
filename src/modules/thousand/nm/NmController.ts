import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nms")
export default class NmController {
  @operation({
    summary: "Get Nms",
  })
  @get()
  static getNms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nm",
  })
  @post("{id}")
  static createNm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
