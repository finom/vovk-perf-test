import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ivds")
export default class IvdController {
  @operation({
    summary: "Get Ivds",
  })
  @get()
  static getIvds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ivd",
  })
  @post("{id}")
  static createIvd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
