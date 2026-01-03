import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mefs")
export default class MefController {
  @operation({
    summary: "Get Mefs",
  })
  @get()
  static getMefs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mef",
  })
  @post("{id}")
  static createMef = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
