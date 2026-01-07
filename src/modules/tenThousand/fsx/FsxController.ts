import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fsx")
export default class FsxController {
  @operation({
    summary: "Get Fsx",
  })
  @get()
  static getFsx = procedure({
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
