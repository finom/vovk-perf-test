import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mhts")
export default class MhtController {
  @operation({
    summary: "Get Mhts",
  })
  @get()
  static getMhts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mht",
  })
  @post("{id}")
  static createMht = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
