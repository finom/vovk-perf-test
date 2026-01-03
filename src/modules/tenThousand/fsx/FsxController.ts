import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fsxes")
export default class FsxController {
  @operation({
    summary: "Get Fsxes",
  })
  @get()
  static getFsxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fsx",
  })
  @post("{id}")
  static createFsx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
