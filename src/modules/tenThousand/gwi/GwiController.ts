import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gwi")
export default class GwiController {
  @operation({
    summary: "Get Gwi",
  })
  @get()
  static getGwi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gwi",
  })
  @post("{id}")
  static createGwi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
