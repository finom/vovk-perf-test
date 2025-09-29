import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gbqs")
export default class GbqController {
  @operation({
    summary: "Get Gbqs",
  })
  @get()
  static getGbqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gbq",
  })
  @post("{id}")
  static createGbq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
