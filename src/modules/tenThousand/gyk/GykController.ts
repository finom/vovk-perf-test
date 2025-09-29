import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gyks")
export default class GykController {
  @operation({
    summary: "Get Gyks",
  })
  @get()
  static getGyks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gyk",
  })
  @post("{id}")
  static createGyk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
