import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gcp")
export default class GcpController {
  @operation({
    summary: "Get Gcp",
  })
  @get()
  static getGcp = procedure({
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
