import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kves")
export default class KveController {
  @operation({
    summary: "Get Kves",
  })
  @get()
  static getKves = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kve",
  })
  @post("{id}")
  static createKve = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
