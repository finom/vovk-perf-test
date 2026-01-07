import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kmd")
export default class KmdController {
  @operation({
    summary: "Get Kmd",
  })
  @get()
  static getKmd = procedure({
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
