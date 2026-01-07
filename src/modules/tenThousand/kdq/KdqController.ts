import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kdq")
export default class KdqController {
  @operation({
    summary: "Get Kdq",
  })
  @get()
  static getKdq = procedure({
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
