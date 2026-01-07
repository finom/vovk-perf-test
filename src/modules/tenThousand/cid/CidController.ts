import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cid")
export default class CidController {
  @operation({
    summary: "Get Cid",
  })
  @get()
  static getCid = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cid",
  })
  @post("{id}")
  static createCid = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
