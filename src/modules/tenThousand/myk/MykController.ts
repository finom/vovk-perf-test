import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("myks")
export default class MykController {
  @operation({
    summary: "Get Myks",
  })
  @get()
  static getMyks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Myk",
  })
  @post("{id}")
  static createMyk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
