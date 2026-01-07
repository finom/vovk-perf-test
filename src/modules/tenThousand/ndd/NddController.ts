import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ndd")
export default class NddController {
  @operation({
    summary: "Get Ndd",
  })
  @get()
  static getNdd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ndd",
  })
  @post("{id}")
  static createNdd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
