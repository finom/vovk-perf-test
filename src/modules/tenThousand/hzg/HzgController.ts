import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hzgs")
export default class HzgController {
  @operation({
    summary: "Get Hzgs",
  })
  @get()
  static getHzgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hzg",
  })
  @post("{id}")
  static createHzg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
