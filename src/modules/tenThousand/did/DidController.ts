import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dids")
export default class DidController {
  @operation({
    summary: "Get Dids",
  })
  @get()
  static getDids = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Did",
  })
  @post("{id}")
  static createDid = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
