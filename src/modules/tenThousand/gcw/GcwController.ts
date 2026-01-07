import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gcw")
export default class GcwController {
  @operation({
    summary: "Get Gcw",
  })
  @get()
  static getGcw = procedure({
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
