import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dzds")
export default class DzdController {
  @operation({
    summary: "Get Dzds",
  })
  @get()
  static getDzds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dzd",
  })
  @post("{id}")
  static createDzd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
