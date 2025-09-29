import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hys")
export default class HysController {
  @operation({
    summary: "Get Hys",
  })
  @get()
  static getHys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hys",
  })
  @post("{id}")
  static createHys = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
