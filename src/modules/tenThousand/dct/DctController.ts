import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dcts")
export default class DctController {
  @operation({
    summary: "Get Dcts",
  })
  @get()
  static getDcts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dct",
  })
  @post("{id}")
  static createDct = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
