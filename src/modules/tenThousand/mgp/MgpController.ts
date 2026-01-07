import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mgp")
export default class MgpController {
  @operation({
    summary: "Get Mgp",
  })
  @get()
  static getMgp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mgp",
  })
  @post("{id}")
  static createMgp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
