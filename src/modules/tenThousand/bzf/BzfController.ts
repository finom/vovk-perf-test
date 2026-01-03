import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bzfs")
export default class BzfController {
  @operation({
    summary: "Get Bzfs",
  })
  @get()
  static getBzfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bzf",
  })
  @post("{id}")
  static createBzf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
