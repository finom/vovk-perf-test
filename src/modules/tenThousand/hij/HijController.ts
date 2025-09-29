import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hijs")
export default class HijController {
  @operation({
    summary: "Get Hijs",
  })
  @get()
  static getHijs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hij",
  })
  @post("{id}")
  static createHij = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
