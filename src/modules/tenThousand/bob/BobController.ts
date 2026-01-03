import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bobs")
export default class BobController {
  @operation({
    summary: "Get Bobs",
  })
  @get()
  static getBobs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bob",
  })
  @post("{id}")
  static createBob = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
