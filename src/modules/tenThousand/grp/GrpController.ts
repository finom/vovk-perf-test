import { procedure, prefix, get, post, operation } from "vovk";

@prefix("grp")
export default class GrpController {
  @operation({
    summary: "Get Grp",
  })
  @get()
  static getGrp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Grp",
  })
  @post("{id}")
  static createGrp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
