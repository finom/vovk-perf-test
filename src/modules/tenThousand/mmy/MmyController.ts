import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mmies")
export default class MmyController {
  @operation({
    summary: "Get Mmies",
  })
  @get()
  static getMmies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mmy",
  })
  @post("{id}")
  static createMmy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
