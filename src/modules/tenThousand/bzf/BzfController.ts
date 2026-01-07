import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bzf")
export default class BzfController {
  @operation({
    summary: "Get Bzf",
  })
  @get()
  static getBzf = procedure({
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
