import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mjzs")
export default class MjzController {
  @operation({
    summary: "Get Mjzs",
  })
  @get()
  static getMjzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mjz",
  })
  @post("{id}")
  static createMjz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
