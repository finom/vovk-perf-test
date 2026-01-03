import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gkvs")
export default class GkvController {
  @operation({
    summary: "Get Gkvs",
  })
  @get()
  static getGkvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gkv",
  })
  @post("{id}")
  static createGkv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
