import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mdps")
export default class MdpController {
  @operation({
    summary: "Get Mdps",
  })
  @get()
  static getMdps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mdp",
  })
  @post("{id}")
  static createMdp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
