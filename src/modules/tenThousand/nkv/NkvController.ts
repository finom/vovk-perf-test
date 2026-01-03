import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nkvs")
export default class NkvController {
  @operation({
    summary: "Get Nkvs",
  })
  @get()
  static getNkvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nkv",
  })
  @post("{id}")
  static createNkv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
