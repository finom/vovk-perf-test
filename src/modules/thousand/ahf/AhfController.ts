import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ahfs")
export default class AhfController {
  @operation({
    summary: "Get Ahfs",
  })
  @get()
  static getAhfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ahf",
  })
  @post("{id}")
  static createAhf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
