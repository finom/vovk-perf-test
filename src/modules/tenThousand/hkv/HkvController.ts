import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hkvs")
export default class HkvController {
  @operation({
    summary: "Get Hkvs",
  })
  @get()
  static getHkvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hkv",
  })
  @post("{id}")
  static createHkv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
