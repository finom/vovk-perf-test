import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dvds")
export default class DvdController {
  @operation({
    summary: "Get Dvds",
  })
  @get()
  static getDvds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dvd",
  })
  @post("{id}")
  static createDvd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
