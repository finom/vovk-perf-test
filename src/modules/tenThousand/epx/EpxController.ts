import { procedure, prefix, get, post, operation } from "vovk";

@prefix("epxes")
export default class EpxController {
  @operation({
    summary: "Get Epxes",
  })
  @get()
  static getEpxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Epx",
  })
  @post("{id}")
  static createEpx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
