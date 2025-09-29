import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("knxes")
export default class KnxController {
  @operation({
    summary: "Get Knxes",
  })
  @get()
  static getKnxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Knx",
  })
  @post("{id}")
  static createKnx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
