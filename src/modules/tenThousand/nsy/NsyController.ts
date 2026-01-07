import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nsy")
export default class NsyController {
  @operation({
    summary: "Get Nsy",
  })
  @get()
  static getNsy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nsy",
  })
  @post("{id}")
  static createNsy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
