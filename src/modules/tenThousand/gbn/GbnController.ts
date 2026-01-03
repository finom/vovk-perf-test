import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gbns")
export default class GbnController {
  @operation({
    summary: "Get Gbns",
  })
  @get()
  static getGbns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gbn",
  })
  @post("{id}")
  static createGbn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
