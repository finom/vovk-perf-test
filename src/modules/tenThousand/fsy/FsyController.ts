import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fsies")
export default class FsyController {
  @operation({
    summary: "Get Fsies",
  })
  @get()
  static getFsies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fsy",
  })
  @post("{id}")
  static createFsy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
