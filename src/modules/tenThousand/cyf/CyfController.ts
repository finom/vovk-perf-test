import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cyfs")
export default class CyfController {
  @operation({
    summary: "Get Cyfs",
  })
  @get()
  static getCyfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cyf",
  })
  @post("{id}")
  static createCyf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
