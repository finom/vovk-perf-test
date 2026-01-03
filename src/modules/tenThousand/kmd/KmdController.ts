import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kmds")
export default class KmdController {
  @operation({
    summary: "Get Kmds",
  })
  @get()
  static getKmds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kmd",
  })
  @post("{id}")
  static createKmd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
