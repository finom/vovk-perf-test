import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gggs")
export default class GggController {
  @operation({
    summary: "Get Gggs",
  })
  @get()
  static getGggs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ggg",
  })
  @post("{id}")
  static createGgg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
