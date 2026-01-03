import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ngs")
export default class NgsController {
  @operation({
    summary: "Get Ngs",
  })
  @get()
  static getNgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ngs",
  })
  @post("{id}")
  static createNgs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
