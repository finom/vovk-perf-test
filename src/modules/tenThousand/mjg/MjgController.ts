import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mjgs")
export default class MjgController {
  @operation({
    summary: "Get Mjgs",
  })
  @get()
  static getMjgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mjg",
  })
  @post("{id}")
  static createMjg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
