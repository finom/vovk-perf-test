import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ddfs")
export default class DdfController {
  @operation({
    summary: "Get Ddfs",
  })
  @get()
  static getDdfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ddf",
  })
  @post("{id}")
  static createDdf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
