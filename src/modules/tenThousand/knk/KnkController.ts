import { procedure, prefix, get, post, operation } from "vovk";

@prefix("knks")
export default class KnkController {
  @operation({
    summary: "Get Knks",
  })
  @get()
  static getKnks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Knk",
  })
  @post("{id}")
  static createKnk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
