import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hnc")
export default class HncController {
  @operation({
    summary: "Get Hnc",
  })
  @get()
  static getHnc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hnc",
  })
  @post("{id}")
  static createHnc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
