import { procedure, prefix, get, post, operation } from "vovk";

@prefix("buws")
export default class BuwController {
  @operation({
    summary: "Get Buws",
  })
  @get()
  static getBuws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Buw",
  })
  @post("{id}")
  static createBuw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
