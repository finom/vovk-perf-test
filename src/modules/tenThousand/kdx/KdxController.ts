import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kdx")
export default class KdxController {
  @operation({
    summary: "Get Kdx",
  })
  @get()
  static getKdx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kdx",
  })
  @post("{id}")
  static createKdx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
