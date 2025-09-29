import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bccs")
export default class BccController {
  @operation({
    summary: "Get Bccs",
  })
  @get()
  static getBccs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bcc",
  })
  @post("{id}")
  static createBcc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
