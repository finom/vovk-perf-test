import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("tds")
export default class TdController {
  @operation({
    summary: "Get Tds",
  })
  @get()
  static getTds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Td",
  })
  @post("{id}")
  static createTd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
