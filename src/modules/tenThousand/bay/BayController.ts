import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bays")
export default class BayController {
  @operation({
    summary: "Get Bays",
  })
  @get()
  static getBays = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bay",
  })
  @post("{id}")
  static createBay = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
