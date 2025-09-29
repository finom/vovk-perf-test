import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ncqs")
export default class NcqController {
  @operation({
    summary: "Get Ncqs",
  })
  @get()
  static getNcqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ncq",
  })
  @post("{id}")
  static createNcq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
