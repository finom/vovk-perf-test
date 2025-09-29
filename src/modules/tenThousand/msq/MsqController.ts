import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("msqs")
export default class MsqController {
  @operation({
    summary: "Get Msqs",
  })
  @get()
  static getMsqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Msq",
  })
  @post("{id}")
  static createMsq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
