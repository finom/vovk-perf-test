import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ngs")
export default class NgController {
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
    summary: "Create Ng",
  })
  @post("{id}")
  static createNg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
