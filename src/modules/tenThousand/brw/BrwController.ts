import { procedure, prefix, get, post, operation } from "vovk";

@prefix("brw")
export default class BrwController {
  @operation({
    summary: "Get Brw",
  })
  @get()
  static getBrw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Brw",
  })
  @post("{id}")
  static createBrw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
