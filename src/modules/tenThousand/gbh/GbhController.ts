import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gbhs")
export default class GbhController {
  @operation({
    summary: "Get Gbhs",
  })
  @get()
  static getGbhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gbh",
  })
  @post("{id}")
  static createGbh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
