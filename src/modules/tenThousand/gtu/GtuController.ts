import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gtus")
export default class GtuController {
  @operation({
    summary: "Get Gtus",
  })
  @get()
  static getGtus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gtu",
  })
  @post("{id}")
  static createGtu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
