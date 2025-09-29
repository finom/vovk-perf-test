import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fsrs")
export default class FsrController {
  @operation({
    summary: "Get Fsrs",
  })
  @get()
  static getFsrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fsr",
  })
  @post("{id}")
  static createFsr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
