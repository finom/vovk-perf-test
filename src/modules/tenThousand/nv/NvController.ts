import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nv")
export default class NvController {
  @operation({
    summary: "Get Nv",
  })
  @get()
  static getNv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nv",
  })
  @post("{id}")
  static createNv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
