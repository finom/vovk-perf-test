import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("byms")
export default class BymController {
  @operation({
    summary: "Get Byms",
  })
  @get()
  static getByms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bym",
  })
  @post("{id}")
  static createBym = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
