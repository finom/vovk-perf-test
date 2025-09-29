import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bues")
export default class BueController {
  @operation({
    summary: "Get Bues",
  })
  @get()
  static getBues = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bue",
  })
  @post("{id}")
  static createBue = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
