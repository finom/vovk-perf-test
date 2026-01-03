import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kcies")
export default class KcyController {
  @operation({
    summary: "Get Kcies",
  })
  @get()
  static getKcies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kcy",
  })
  @post("{id}")
  static createKcy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
