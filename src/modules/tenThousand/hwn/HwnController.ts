import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hwns")
export default class HwnController {
  @operation({
    summary: "Get Hwns",
  })
  @get()
  static getHwns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hwn",
  })
  @post("{id}")
  static createHwn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
