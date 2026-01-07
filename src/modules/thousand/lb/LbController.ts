import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lb")
export default class LbController {
  @operation({
    summary: "Get Lb",
  })
  @get()
  static getLb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lb",
  })
  @post("{id}")
  static createLb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
