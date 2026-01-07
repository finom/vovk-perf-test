import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bio")
export default class BioController {
  @operation({
    summary: "Get Bio",
  })
  @get()
  static getBio = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bio",
  })
  @post("{id}")
  static createBio = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
