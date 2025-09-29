import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kvds")
export default class KvdController {
  @operation({
    summary: "Get Kvds",
  })
  @get()
  static getKvds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kvd",
  })
  @post("{id}")
  static createKvd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
