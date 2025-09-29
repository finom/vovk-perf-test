import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dhhs")
export default class DhhController {
  @operation({
    summary: "Get Dhhs",
  })
  @get()
  static getDhhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dhh",
  })
  @post("{id}")
  static createDhh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
