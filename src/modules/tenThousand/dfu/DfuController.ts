import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dfus")
export default class DfuController {
  @operation({
    summary: "Get Dfus",
  })
  @get()
  static getDfus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dfu",
  })
  @post("{id}")
  static createDfu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
