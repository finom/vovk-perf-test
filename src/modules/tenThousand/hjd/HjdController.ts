import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hjds")
export default class HjdController {
  @operation({
    summary: "Get Hjds",
  })
  @get()
  static getHjds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hjd",
  })
  @post("{id}")
  static createHjd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
