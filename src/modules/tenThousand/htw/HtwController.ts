import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("htws")
export default class HtwController {
  @operation({
    summary: "Get Htws",
  })
  @get()
  static getHtws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Htw",
  })
  @post("{id}")
  static createHtw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
