import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fam")
export default class FamController {
  @operation({
    summary: "Get Fam",
  })
  @get()
  static getFam = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fam",
  })
  @post("{id}")
  static createFam = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
