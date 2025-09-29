import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aacs")
export default class AacController {
  @operation({
    summary: "Get Aacs",
  })
  @get()
  static getAacs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aac",
  })
  @post("{id}")
  static createAac = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
