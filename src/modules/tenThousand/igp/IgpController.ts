import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("igps")
export default class IgpController {
  @operation({
    summary: "Get Igps",
  })
  @get()
  static getIgps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Igp",
  })
  @post("{id}")
  static createIgp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
