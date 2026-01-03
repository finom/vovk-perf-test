import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gcws")
export default class GcwController {
  @operation({
    summary: "Get Gcws",
  })
  @get()
  static getGcws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gcw",
  })
  @post("{id}")
  static createGcw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
