import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dlves")
export default class DlfController {
  @operation({
    summary: "Get Dlves",
  })
  @get()
  static getDlves = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dlf",
  })
  @post("{id}")
  static createDlf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
