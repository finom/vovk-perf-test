import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fggs")
export default class FggController {
  @operation({
    summary: "Get Fggs",
  })
  @get()
  static getFggs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fgg",
  })
  @post("{id}")
  static createFgg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
