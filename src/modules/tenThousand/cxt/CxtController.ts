import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cxts")
export default class CxtController {
  @operation({
    summary: "Get Cxts",
  })
  @get()
  static getCxts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cxt",
  })
  @post("{id}")
  static createCxt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
