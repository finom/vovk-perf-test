import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fsws")
export default class FswController {
  @operation({
    summary: "Get Fsws",
  })
  @get()
  static getFsws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fsw",
  })
  @post("{id}")
  static createFsw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
