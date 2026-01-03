import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hmns")
export default class HmnController {
  @operation({
    summary: "Get Hmns",
  })
  @get()
  static getHmns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hmn",
  })
  @post("{id}")
  static createHmn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
