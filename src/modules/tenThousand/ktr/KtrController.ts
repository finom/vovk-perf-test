import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ktr")
export default class KtrController {
  @operation({
    summary: "Get Ktr",
  })
  @get()
  static getKtr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ktr",
  })
  @post("{id}")
  static createKtr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
