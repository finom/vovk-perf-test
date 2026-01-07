import { procedure, prefix, get, post, operation } from "vovk";

@prefix("feq")
export default class FeqController {
  @operation({
    summary: "Get Feq",
  })
  @get()
  static getFeq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Feq",
  })
  @post("{id}")
  static createFeq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
