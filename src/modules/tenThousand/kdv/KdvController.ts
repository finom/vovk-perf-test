import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kdv")
export default class KdvController {
  @operation({
    summary: "Get Kdv",
  })
  @get()
  static getKdv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kdv",
  })
  @post("{id}")
  static createKdv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
