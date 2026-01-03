import { procedure, prefix, get, post, operation } from "vovk";

@prefix("avs")
export default class AvsController {
  @operation({
    summary: "Get Avs",
  })
  @get()
  static getAvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Avs",
  })
  @post("{id}")
  static createAvs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
