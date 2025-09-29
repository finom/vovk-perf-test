import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mkvs")
export default class MkvController {
  @operation({
    summary: "Get Mkvs",
  })
  @get()
  static getMkvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mkv",
  })
  @post("{id}")
  static createMkv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
