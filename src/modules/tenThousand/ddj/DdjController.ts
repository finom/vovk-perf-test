import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ddjs")
export default class DdjController {
  @operation({
    summary: "Get Ddjs",
  })
  @get()
  static getDdjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ddj",
  })
  @post("{id}")
  static createDdj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
