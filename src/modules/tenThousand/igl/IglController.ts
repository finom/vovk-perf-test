import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("igls")
export default class IglController {
  @operation({
    summary: "Get Igls",
  })
  @get()
  static getIgls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Igl",
  })
  @post("{id}")
  static createIgl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
