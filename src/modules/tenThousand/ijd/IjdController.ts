import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ijds")
export default class IjdController {
  @operation({
    summary: "Get Ijds",
  })
  @get()
  static getIjds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ijd",
  })
  @post("{id}")
  static createIjd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
