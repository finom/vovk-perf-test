import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mcus")
export default class McuController {
  @operation({
    summary: "Get Mcus",
  })
  @get()
  static getMcus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mcu",
  })
  @post("{id}")
  static createMcu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
