import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fsps")
export default class FspController {
  @operation({
    summary: "Get Fsps",
  })
  @get()
  static getFsps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fsp",
  })
  @post("{id}")
  static createFsp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
