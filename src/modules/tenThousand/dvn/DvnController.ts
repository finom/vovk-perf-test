import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dvns")
export default class DvnController {
  @operation({
    summary: "Get Dvns",
  })
  @get()
  static getDvns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dvn",
  })
  @post("{id}")
  static createDvn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
