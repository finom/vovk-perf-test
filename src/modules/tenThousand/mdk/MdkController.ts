import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mdks")
export default class MdkController {
  @operation({
    summary: "Get Mdks",
  })
  @get()
  static getMdks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mdk",
  })
  @post("{id}")
  static createMdk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
