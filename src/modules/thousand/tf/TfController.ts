import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("tfs")
export default class TfController {
  @operation({
    summary: "Get Tfs",
  })
  @get()
  static getTfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Tf",
  })
  @post("{id}")
  static createTf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
