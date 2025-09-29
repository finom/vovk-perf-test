import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bhfs")
export default class BhfController {
  @operation({
    summary: "Get Bhfs",
  })
  @get()
  static getBhfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bhf",
  })
  @post("{id}")
  static createBhf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
