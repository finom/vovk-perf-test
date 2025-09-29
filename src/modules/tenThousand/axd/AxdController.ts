import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("axds")
export default class AxdController {
  @operation({
    summary: "Get Axds",
  })
  @get()
  static getAxds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Axd",
  })
  @post("{id}")
  static createAxd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
