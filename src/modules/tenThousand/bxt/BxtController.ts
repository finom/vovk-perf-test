import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bxts")
export default class BxtController {
  @operation({
    summary: "Get Bxts",
  })
  @get()
  static getBxts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bxt",
  })
  @post("{id}")
  static createBxt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
