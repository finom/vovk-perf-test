import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lbas")
export default class LbaController {
  @operation({
    summary: "Get Lbas",
  })
  @get()
  static getLbas = procedure({
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
