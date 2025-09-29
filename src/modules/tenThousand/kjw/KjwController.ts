import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kjws")
export default class KjwController {
  @operation({
    summary: "Get Kjws",
  })
  @get()
  static getKjws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kjw",
  })
  @post("{id}")
  static createKjw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
