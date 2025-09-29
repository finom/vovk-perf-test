import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hyks")
export default class HykController {
  @operation({
    summary: "Get Hyks",
  })
  @get()
  static getHyks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hyk",
  })
  @post("{id}")
  static createHyk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
