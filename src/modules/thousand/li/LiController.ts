import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lis")
export default class LiController {
  @operation({
    summary: "Get Lis",
  })
  @get()
  static getLis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Li",
  })
  @post("{id}")
  static createLi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
