import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lwns")
export default class LwnController {
  @operation({
    summary: "Get Lwns",
  })
  @get()
  static getLwns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lwn",
  })
  @post("{id}")
  static createLwn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
