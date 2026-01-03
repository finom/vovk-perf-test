import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gcps")
export default class GcpController {
  @operation({
    summary: "Get Gcps",
  })
  @get()
  static getGcps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gcp",
  })
  @post("{id}")
  static createGcp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
