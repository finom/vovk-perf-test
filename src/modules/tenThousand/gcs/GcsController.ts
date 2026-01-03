import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gcs")
export default class GcsController {
  @operation({
    summary: "Get Gcs",
  })
  @get()
  static getGcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gcs",
  })
  @post("{id}")
  static createGcs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
