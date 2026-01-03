import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fems")
export default class FemController {
  @operation({
    summary: "Get Fems",
  })
  @get()
  static getFems = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fem",
  })
  @post("{id}")
  static createFem = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
