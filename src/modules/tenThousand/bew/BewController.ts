import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bew")
export default class BewController {
  @operation({
    summary: "Get Bew",
  })
  @get()
  static getBew = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bew",
  })
  @post("{id}")
  static createBew = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
