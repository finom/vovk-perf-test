import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dzgs")
export default class DzgController {
  @operation({
    summary: "Get Dzgs",
  })
  @get()
  static getDzgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dzg",
  })
  @post("{id}")
  static createDzg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
