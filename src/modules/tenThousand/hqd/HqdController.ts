import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hqds")
export default class HqdController {
  @operation({
    summary: "Get Hqds",
  })
  @get()
  static getHqds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hqd",
  })
  @post("{id}")
  static createHqd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
