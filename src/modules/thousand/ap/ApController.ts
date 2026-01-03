import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aps")
export default class ApController {
  @operation({
    summary: "Get Aps",
  })
  @get()
  static getAps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ap",
  })
  @post("{id}")
  static createAp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
