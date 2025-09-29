import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dds")
export default class DdController {
  @operation({
    summary: "Get Dds",
  })
  @get()
  static getDds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dd",
  })
  @post("{id}")
  static createDd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
