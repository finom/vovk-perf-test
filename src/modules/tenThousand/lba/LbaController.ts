import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lba")
export default class LbaController {
  @operation({
    summary: "Get Lba",
  })
  @get()
  static getLba = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lba",
  })
  @post("{id}")
  static createLba = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
