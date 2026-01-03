import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mtxes")
export default class MtxController {
  @operation({
    summary: "Get Mtxes",
  })
  @get()
  static getMtxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mtx",
  })
  @post("{id}")
  static createMtx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
