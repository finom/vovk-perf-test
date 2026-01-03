import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lkies")
export default class LkyController {
  @operation({
    summary: "Get Lkies",
  })
  @get()
  static getLkies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lky",
  })
  @post("{id}")
  static createLky = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
