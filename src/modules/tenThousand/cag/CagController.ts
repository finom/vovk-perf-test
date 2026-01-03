import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cags")
export default class CagController {
  @operation({
    summary: "Get Cags",
  })
  @get()
  static getCags = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cag",
  })
  @post("{id}")
  static createCag = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
