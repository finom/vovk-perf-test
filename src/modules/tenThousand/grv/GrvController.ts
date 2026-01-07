import { procedure, prefix, get, post, operation } from "vovk";

@prefix("grv")
export default class GrvController {
  @operation({
    summary: "Get Grv",
  })
  @get()
  static getGrv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Grv",
  })
  @post("{id}")
  static createGrv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
