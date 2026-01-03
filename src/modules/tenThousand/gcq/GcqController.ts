import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gcqs")
export default class GcqController {
  @operation({
    summary: "Get Gcqs",
  })
  @get()
  static getGcqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gcq",
  })
  @post("{id}")
  static createGcq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
