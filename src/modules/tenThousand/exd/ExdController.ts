import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("exds")
export default class ExdController {
  @operation({
    summary: "Get Exds",
  })
  @get()
  static getExds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Exd",
  })
  @post("{id}")
  static createExd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
