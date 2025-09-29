import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("devs")
export default class DevController {
  @operation({
    summary: "Get Devs",
  })
  @get()
  static getDevs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dev",
  })
  @post("{id}")
  static createDev = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
