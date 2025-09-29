import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dubs")
export default class DubController {
  @operation({
    summary: "Get Dubs",
  })
  @get()
  static getDubs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dub",
  })
  @post("{id}")
  static createDub = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
