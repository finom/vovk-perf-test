import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hmjs")
export default class HmjController {
  @operation({
    summary: "Get Hmjs",
  })
  @get()
  static getHmjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hmj",
  })
  @post("{id}")
  static createHmj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
