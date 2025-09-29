import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("qos")
export default class QoController {
  @operation({
    summary: "Get Qos",
  })
  @get()
  static getQos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Qo",
  })
  @post("{id}")
  static createQo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
