import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gcs")
export default class GcController {
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
    summary: "Create Gc",
  })
  @post("{id}")
  static createGc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
