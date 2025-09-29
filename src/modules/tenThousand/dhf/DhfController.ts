import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dhfs")
export default class DhfController {
  @operation({
    summary: "Get Dhfs",
  })
  @get()
  static getDhfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dhf",
  })
  @post("{id}")
  static createDhf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
