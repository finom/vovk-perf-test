import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dds")
export default class DdsController {
  @operation({
    summary: "Get Dds",
  })
  @get()
  static getDds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dds",
  })
  @post("{id}")
  static createDds = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
