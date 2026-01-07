import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gsx")
export default class GsxController {
  @operation({
    summary: "Get Gsx",
  })
  @get()
  static getGsx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gsx",
  })
  @post("{id}")
  static createGsx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
