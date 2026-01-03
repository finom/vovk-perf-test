import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kkies")
export default class KkyController {
  @operation({
    summary: "Get Kkies",
  })
  @get()
  static getKkies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kky",
  })
  @post("{id}")
  static createKky = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
