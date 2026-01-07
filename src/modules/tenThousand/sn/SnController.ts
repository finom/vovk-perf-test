import { procedure, prefix, get, post, operation } from "vovk";

@prefix("sn")
export default class SnController {
  @operation({
    summary: "Get Sn",
  })
  @get()
  static getSn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Sn",
  })
  @post("{id}")
  static createSn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
