import { procedure, prefix, get, post, operation } from "vovk";

@prefix("grw")
export default class GrwController {
  @operation({
    summary: "Get Grw",
  })
  @get()
  static getGrw = procedure({
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
