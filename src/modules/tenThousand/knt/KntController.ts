import { procedure, prefix, get, post, operation } from "vovk";

@prefix("knt")
export default class KntController {
  @operation({
    summary: "Get Knt",
  })
  @get()
  static getKnt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Knt",
  })
  @post("{id}")
  static createKnt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
