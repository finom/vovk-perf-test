import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gbies")
export default class GbyController {
  @operation({
    summary: "Get Gbies",
  })
  @get()
  static getGbies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gby",
  })
  @post("{id}")
  static createGby = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
