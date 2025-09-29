import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dljs")
export default class DljController {
  @operation({
    summary: "Get Dljs",
  })
  @get()
  static getDljs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dlj",
  })
  @post("{id}")
  static createDlj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
