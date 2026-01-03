import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mgcs")
export default class MgcController {
  @operation({
    summary: "Get Mgcs",
  })
  @get()
  static getMgcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mgc",
  })
  @post("{id}")
  static createMgc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
