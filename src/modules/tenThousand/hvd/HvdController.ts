import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hvds")
export default class HvdController {
  @operation({
    summary: "Get Hvds",
  })
  @get()
  static getHvds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hvd",
  })
  @post("{id}")
  static createHvd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
