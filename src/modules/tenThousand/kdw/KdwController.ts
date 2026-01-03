import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kdws")
export default class KdwController {
  @operation({
    summary: "Get Kdws",
  })
  @get()
  static getKdws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kdw",
  })
  @post("{id}")
  static createKdw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
