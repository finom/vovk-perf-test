import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fbs")
export default class FbController {
  @operation({
    summary: "Get Fbs",
  })
  @get()
  static getFbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fb",
  })
  @post("{id}")
  static createFb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
