import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kcy")
export default class KcyController {
  @operation({
    summary: "Get Kcy",
  })
  @get()
  static getKcy = procedure({
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
