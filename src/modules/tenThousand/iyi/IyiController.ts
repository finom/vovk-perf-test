import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iyis")
export default class IyiController {
  @operation({
    summary: "Get Iyis",
  })
  @get()
  static getIyis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iyi",
  })
  @post("{id}")
  static createIyi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
