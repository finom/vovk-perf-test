import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jpus")
export default class JpuController {
  @operation({
    summary: "Get Jpus",
  })
  @get()
  static getJpus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jpu",
  })
  @post("{id}")
  static createJpu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
