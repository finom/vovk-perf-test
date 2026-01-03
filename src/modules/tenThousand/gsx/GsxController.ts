import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gsxes")
export default class GsxController {
  @operation({
    summary: "Get Gsxes",
  })
  @get()
  static getGsxes = procedure({
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
