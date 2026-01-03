import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fams")
export default class FamController {
  @operation({
    summary: "Get Fams",
  })
  @get()
  static getFams = procedure({
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
