import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gcr")
export default class GcrController {
  @operation({
    summary: "Get Gcr",
  })
  @get()
  static getGcr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gcr",
  })
  @post("{id}")
  static createGcr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
