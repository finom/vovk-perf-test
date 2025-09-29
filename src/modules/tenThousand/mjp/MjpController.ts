import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mjps")
export default class MjpController {
  @operation({
    summary: "Get Mjps",
  })
  @get()
  static getMjps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mjp",
  })
  @post("{id}")
  static createMjp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
