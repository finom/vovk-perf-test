import { procedure, prefix, get, post, operation } from "vovk";

@prefix("epq")
export default class EpqController {
  @operation({
    summary: "Get Epq",
  })
  @get()
  static getEpq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Epq",
  })
  @post("{id}")
  static createEpq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
