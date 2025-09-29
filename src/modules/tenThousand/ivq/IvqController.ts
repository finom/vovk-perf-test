import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ivqs")
export default class IvqController {
  @operation({
    summary: "Get Ivqs",
  })
  @get()
  static getIvqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ivq",
  })
  @post("{id}")
  static createIvq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
