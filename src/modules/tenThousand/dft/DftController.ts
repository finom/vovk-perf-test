import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dfts")
export default class DftController {
  @operation({
    summary: "Get Dfts",
  })
  @get()
  static getDfts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dft",
  })
  @post("{id}")
  static createDft = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
