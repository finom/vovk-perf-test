import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("htus")
export default class HtuController {
  @operation({
    summary: "Get Htus",
  })
  @get()
  static getHtus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Htu",
  })
  @post("{id}")
  static createHtu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
