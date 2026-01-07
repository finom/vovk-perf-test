import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mdp")
export default class MdpController {
  @operation({
    summary: "Get Mdp",
  })
  @get()
  static getMdp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mdp",
  })
  @post("{id}")
  static createMdp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
