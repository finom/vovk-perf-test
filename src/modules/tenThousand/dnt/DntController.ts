import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dnts")
export default class DntController {
  @operation({
    summary: "Get Dnts",
  })
  @get()
  static getDnts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dnt",
  })
  @post("{id}")
  static createDnt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
