import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kdqs")
export default class KdqController {
  @operation({
    summary: "Get Kdqs",
  })
  @get()
  static getKdqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kdq",
  })
  @post("{id}")
  static createKdq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
