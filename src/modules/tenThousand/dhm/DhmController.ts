import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dhms")
export default class DhmController {
  @operation({
    summary: "Get Dhms",
  })
  @get()
  static getDhms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dhm",
  })
  @post("{id}")
  static createDhm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
