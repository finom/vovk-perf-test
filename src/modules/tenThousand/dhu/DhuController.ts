import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dhus")
export default class DhuController {
  @operation({
    summary: "Get Dhus",
  })
  @get()
  static getDhus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dhu",
  })
  @post("{id}")
  static createDhu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
