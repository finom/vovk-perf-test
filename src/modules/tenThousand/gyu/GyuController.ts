import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gyus")
export default class GyuController {
  @operation({
    summary: "Get Gyus",
  })
  @get()
  static getGyus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gyu",
  })
  @post("{id}")
  static createGyu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
