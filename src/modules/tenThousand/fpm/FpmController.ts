import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fpms")
export default class FpmController {
  @operation({
    summary: "Get Fpms",
  })
  @get()
  static getFpms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fpm",
  })
  @post("{id}")
  static createFpm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
