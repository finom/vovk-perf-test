import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nets")
export default class NetController {
  @operation({
    summary: "Get Nets",
  })
  @get()
  static getNets = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Net",
  })
  @post("{id}")
  static createNet = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
