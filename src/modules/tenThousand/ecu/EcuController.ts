import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ecus")
export default class EcuController {
  @operation({
    summary: "Get Ecus",
  })
  @get()
  static getEcus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ecu",
  })
  @post("{id}")
  static createEcu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
