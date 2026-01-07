import { procedure, prefix, get, post, operation } from "vovk";

@prefix("od")
export default class OdController {
  @operation({
    summary: "Get Od",
  })
  @get()
  static getOd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Od",
  })
  @post("{id}")
  static createOd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
