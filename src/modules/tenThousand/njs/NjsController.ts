import { procedure, prefix, get, post, operation } from "vovk";

@prefix("njs")
export default class NjsController {
  @operation({
    summary: "Get Njs",
  })
  @get()
  static getNjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Njs",
  })
  @post("{id}")
  static createNjs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
