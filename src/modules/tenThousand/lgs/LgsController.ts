import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lgs")
export default class LgsController {
  @operation({
    summary: "Get Lgs",
  })
  @get()
  static getLgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lgs",
  })
  @post("{id}")
  static createLgs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
