import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gcbs")
export default class GcbController {
  @operation({
    summary: "Get Gcbs",
  })
  @get()
  static getGcbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gcb",
  })
  @post("{id}")
  static createGcb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
