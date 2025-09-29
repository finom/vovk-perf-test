import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iyus")
export default class IyuController {
  @operation({
    summary: "Get Iyus",
  })
  @get()
  static getIyus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iyu",
  })
  @post("{id}")
  static createIyu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
