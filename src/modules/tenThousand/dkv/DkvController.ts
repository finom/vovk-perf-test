import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dkvs")
export default class DkvController {
  @operation({
    summary: "Get Dkvs",
  })
  @get()
  static getDkvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dkv",
  })
  @post("{id}")
  static createDkv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
