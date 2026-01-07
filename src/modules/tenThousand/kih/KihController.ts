import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kih")
export default class KihController {
  @operation({
    summary: "Get Kih",
  })
  @get()
  static getKih = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kih",
  })
  @post("{id}")
  static createKih = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
