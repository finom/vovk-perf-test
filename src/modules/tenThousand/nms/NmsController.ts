import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nms")
export default class NmsController {
  @operation({
    summary: "Get Nms",
  })
  @get()
  static getNms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nms",
  })
  @post("{id}")
  static createNms = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
