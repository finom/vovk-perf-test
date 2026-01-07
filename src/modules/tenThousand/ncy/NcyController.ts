import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ncy")
export default class NcyController {
  @operation({
    summary: "Get Ncy",
  })
  @get()
  static getNcy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ncy",
  })
  @post("{id}")
  static createNcy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
