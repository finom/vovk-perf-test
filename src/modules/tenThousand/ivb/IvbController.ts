import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ivbs")
export default class IvbController {
  @operation({
    summary: "Get Ivbs",
  })
  @get()
  static getIvbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ivb",
  })
  @post("{id}")
  static createIvb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
