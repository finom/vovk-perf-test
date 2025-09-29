import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gbxes")
export default class GbxController {
  @operation({
    summary: "Get Gbxes",
  })
  @get()
  static getGbxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gbx",
  })
  @post("{id}")
  static createGbx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
