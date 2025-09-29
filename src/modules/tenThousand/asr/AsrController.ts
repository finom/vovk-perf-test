import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("asrs")
export default class AsrController {
  @operation({
    summary: "Get Asrs",
  })
  @get()
  static getAsrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Asr",
  })
  @post("{id}")
  static createAsr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
