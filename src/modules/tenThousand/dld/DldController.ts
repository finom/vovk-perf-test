import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dlds")
export default class DldController {
  @operation({
    summary: "Get Dlds",
  })
  @get()
  static getDlds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dld",
  })
  @post("{id}")
  static createDld = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
