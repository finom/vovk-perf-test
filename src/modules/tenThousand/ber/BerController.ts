import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bers")
export default class BerController {
  @operation({
    summary: "Get Bers",
  })
  @get()
  static getBers = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ber",
  })
  @post("{id}")
  static createBer = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
