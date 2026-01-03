import { procedure, prefix, get, post, operation } from "vovk";

@prefix("grws")
export default class GrwController {
  @operation({
    summary: "Get Grws",
  })
  @get()
  static getGrws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Grw",
  })
  @post("{id}")
  static createGrw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
