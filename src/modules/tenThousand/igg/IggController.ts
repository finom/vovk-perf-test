import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iggs")
export default class IggController {
  @operation({
    summary: "Get Iggs",
  })
  @get()
  static getIggs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Igg",
  })
  @post("{id}")
  static createIgg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
