import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cefs")
export default class CefController {
  @operation({
    summary: "Get Cefs",
  })
  @get()
  static getCefs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cef",
  })
  @post("{id}")
  static createCef = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
