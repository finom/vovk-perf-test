import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dvcs")
export default class DvcController {
  @operation({
    summary: "Get Dvcs",
  })
  @get()
  static getDvcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dvc",
  })
  @post("{id}")
  static createDvc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
