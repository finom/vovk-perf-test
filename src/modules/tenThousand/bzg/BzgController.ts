import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bzgs")
export default class BzgController {
  @operation({
    summary: "Get Bzgs",
  })
  @get()
  static getBzgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bzg",
  })
  @post("{id}")
  static createBzg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
