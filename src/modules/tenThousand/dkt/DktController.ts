import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dkts")
export default class DktController {
  @operation({
    summary: "Get Dkts",
  })
  @get()
  static getDkts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dkt",
  })
  @post("{id}")
  static createDkt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
