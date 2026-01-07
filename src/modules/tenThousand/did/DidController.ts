import { procedure, prefix, get, post, operation } from "vovk";

@prefix("did")
export default class DidController {
  @operation({
    summary: "Get Did",
  })
  @get()
  static getDid = procedure({
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
