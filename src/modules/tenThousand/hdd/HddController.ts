import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hdds")
export default class HddController {
  @operation({
    summary: "Get Hdds",
  })
  @get()
  static getHdds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hdd",
  })
  @post("{id}")
  static createHdd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
