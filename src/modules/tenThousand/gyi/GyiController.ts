import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gyis")
export default class GyiController {
  @operation({
    summary: "Get Gyis",
  })
  @get()
  static getGyis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gyi",
  })
  @post("{id}")
  static createGyi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
