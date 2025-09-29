import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("rxes")
export default class RxController {
  @operation({
    summary: "Get Rxes",
  })
  @get()
  static getRxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Rx",
  })
  @post("{id}")
  static createRx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
