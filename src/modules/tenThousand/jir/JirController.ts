import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jirs")
export default class JirController {
  @operation({
    summary: "Get Jirs",
  })
  @get()
  static getJirs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jir",
  })
  @post("{id}")
  static createJir = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
