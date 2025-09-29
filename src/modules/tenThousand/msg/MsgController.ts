import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("msgs")
export default class MsgController {
  @operation({
    summary: "Get Msgs",
  })
  @get()
  static getMsgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Msg",
  })
  @post("{id}")
  static createMsg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
