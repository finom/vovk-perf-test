import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dhcs")
export default class DhcController {
  @operation({
    summary: "Get Dhcs",
  })
  @get()
  static getDhcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dhc",
  })
  @post("{id}")
  static createDhc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
