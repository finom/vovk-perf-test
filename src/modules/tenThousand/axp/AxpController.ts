import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("axps")
export default class AxpController {
  @operation({
    summary: "Get Axps",
  })
  @get()
  static getAxps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Axp",
  })
  @post("{id}")
  static createAxp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
