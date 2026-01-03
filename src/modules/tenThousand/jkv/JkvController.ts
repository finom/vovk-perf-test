import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jkvs")
export default class JkvController {
  @operation({
    summary: "Get Jkvs",
  })
  @get()
  static getJkvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jkv",
  })
  @post("{id}")
  static createJkv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
