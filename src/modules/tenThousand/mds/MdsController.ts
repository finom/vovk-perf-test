import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mds")
export default class MdsController {
  @operation({
    summary: "Get Mds",
  })
  @get()
  static getMds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mds",
  })
  @post("{id}")
  static createMds = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
