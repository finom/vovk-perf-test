import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cigs")
export default class CigController {
  @operation({
    summary: "Get Cigs",
  })
  @get()
  static getCigs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cig",
  })
  @post("{id}")
  static createCig = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
