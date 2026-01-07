import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cb")
export default class CbController {
  @operation({
    summary: "Get Cb",
  })
  @get()
  static getCb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cb",
  })
  @post("{id}")
  static createCb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
