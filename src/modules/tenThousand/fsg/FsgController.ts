import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fsgs")
export default class FsgController {
  @operation({
    summary: "Get Fsgs",
  })
  @get()
  static getFsgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fsg",
  })
  @post("{id}")
  static createFsg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
