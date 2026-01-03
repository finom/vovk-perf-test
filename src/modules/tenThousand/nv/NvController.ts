import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nvs")
export default class NvController {
  @operation({
    summary: "Get Nvs",
  })
  @get()
  static getNvs = procedure({
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
