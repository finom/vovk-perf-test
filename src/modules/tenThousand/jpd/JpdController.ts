import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jpds")
export default class JpdController {
  @operation({
    summary: "Get Jpds",
  })
  @get()
  static getJpds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jpd",
  })
  @post("{id}")
  static createJpd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
