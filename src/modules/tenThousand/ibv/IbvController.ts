import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ibvs")
export default class IbvController {
  @operation({
    summary: "Get Ibvs",
  })
  @get()
  static getIbvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ibv",
  })
  @post("{id}")
  static createIbv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
