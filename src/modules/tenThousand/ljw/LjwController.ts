import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ljws")
export default class LjwController {
  @operation({
    summary: "Get Ljws",
  })
  @get()
  static getLjws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ljw",
  })
  @post("{id}")
  static createLjw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
