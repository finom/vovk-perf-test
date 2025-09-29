import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iots")
export default class IotController {
  @operation({
    summary: "Get Iots",
  })
  @get()
  static getIots = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iot",
  })
  @post("{id}")
  static createIot = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
