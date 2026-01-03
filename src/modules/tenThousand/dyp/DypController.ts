import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dyps")
export default class DypController {
  @operation({
    summary: "Get Dyps",
  })
  @get()
  static getDyps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dyp",
  })
  @post("{id}")
  static createDyp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
