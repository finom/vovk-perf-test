import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kubs")
export default class KubController {
  @operation({
    summary: "Get Kubs",
  })
  @get()
  static getKubs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kub",
  })
  @post("{id}")
  static createKub = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
