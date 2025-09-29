import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dmxes")
export default class DmxController {
  @operation({
    summary: "Get Dmxes",
  })
  @get()
  static getDmxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dmx",
  })
  @post("{id}")
  static createDmx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
