import { procedure, prefix, get, post, operation } from "vovk";

@prefix("isgs")
export default class IsgController {
  @operation({
    summary: "Get Isgs",
  })
  @get()
  static getIsgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Isg",
  })
  @post("{id}")
  static createIsg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
