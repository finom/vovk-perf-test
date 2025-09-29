import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mjds")
export default class MjdController {
  @operation({
    summary: "Get Mjds",
  })
  @get()
  static getMjds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mjd",
  })
  @post("{id}")
  static createMjd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
