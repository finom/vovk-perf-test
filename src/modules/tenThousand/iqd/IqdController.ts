import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iqds")
export default class IqdController {
  @operation({
    summary: "Get Iqds",
  })
  @get()
  static getIqds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iqd",
  })
  @post("{id}")
  static createIqd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
