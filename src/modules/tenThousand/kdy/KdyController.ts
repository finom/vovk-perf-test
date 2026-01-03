import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kdies")
export default class KdyController {
  @operation({
    summary: "Get Kdies",
  })
  @get()
  static getKdies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kdy",
  })
  @post("{id}")
  static createKdy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
