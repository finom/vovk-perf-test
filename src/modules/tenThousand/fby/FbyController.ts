import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fbies")
export default class FbyController {
  @operation({
    summary: "Get Fbies",
  })
  @get()
  static getFbies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fby",
  })
  @post("{id}")
  static createFby = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
