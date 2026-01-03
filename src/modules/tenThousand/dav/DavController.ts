import { procedure, prefix, get, post, operation } from "vovk";

@prefix("davs")
export default class DavController {
  @operation({
    summary: "Get Davs",
  })
  @get()
  static getDavs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dav",
  })
  @post("{id}")
  static createDav = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
