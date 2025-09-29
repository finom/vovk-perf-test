import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kfds")
export default class KfdController {
  @operation({
    summary: "Get Kfds",
  })
  @get()
  static getKfds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kfd",
  })
  @post("{id}")
  static createKfd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
