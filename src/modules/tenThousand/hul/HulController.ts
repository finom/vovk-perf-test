import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("huls")
export default class HulController {
  @operation({
    summary: "Get Huls",
  })
  @get()
  static getHuls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hul",
  })
  @post("{id}")
  static createHul = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
