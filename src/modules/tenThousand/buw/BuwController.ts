import { procedure, prefix, get, post, operation } from "vovk";

@prefix("buw")
export default class BuwController {
  @operation({
    summary: "Get Buw",
  })
  @get()
  static getBuw = procedure({
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
