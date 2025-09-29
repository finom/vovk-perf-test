import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kazs")
export default class KazController {
  @operation({
    summary: "Get Kazs",
  })
  @get()
  static getKazs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kaz",
  })
  @post("{id}")
  static createKaz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
