import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kihs")
export default class KihController {
  @operation({
    summary: "Get Kihs",
  })
  @get()
  static getKihs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kih",
  })
  @post("{id}")
  static createKih = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
