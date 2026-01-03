import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lids")
export default class LidController {
  @operation({
    summary: "Get Lids",
  })
  @get()
  static getLids = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lid",
  })
  @post("{id}")
  static createLid = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
