import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("myus")
export default class MyuController {
  @operation({
    summary: "Get Myus",
  })
  @get()
  static getMyus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Myu",
  })
  @post("{id}")
  static createMyu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
