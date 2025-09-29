import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("epxes")
export default class EpxController {
  @operation({
    summary: "Get Epxes",
  })
  @get()
  static getEpxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Epx",
  })
  @post("{id}")
  static createEpx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
