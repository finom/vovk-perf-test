import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kdg")
export default class KdgController {
  @operation({
    summary: "Get Kdg",
  })
  @get()
  static getKdg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kdg",
  })
  @post("{id}")
  static createKdg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
