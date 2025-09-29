import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hzcs")
export default class HzcController {
  @operation({
    summary: "Get Hzcs",
  })
  @get()
  static getHzcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hzc",
  })
  @post("{id}")
  static createHzc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
