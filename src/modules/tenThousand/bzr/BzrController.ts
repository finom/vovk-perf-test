import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bzr")
export default class BzrController {
  @operation({
    summary: "Get Bzr",
  })
  @get()
  static getBzr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bzr",
  })
  @post("{id}")
  static createBzr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
