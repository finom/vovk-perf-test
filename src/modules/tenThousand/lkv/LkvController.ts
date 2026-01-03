import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lkvs")
export default class LkvController {
  @operation({
    summary: "Get Lkvs",
  })
  @get()
  static getLkvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lkv",
  })
  @post("{id}")
  static createLkv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
