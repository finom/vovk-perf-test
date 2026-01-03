import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kxxes")
export default class KxxController {
  @operation({
    summary: "Get Kxxes",
  })
  @get()
  static getKxxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kxx",
  })
  @post("{id}")
  static createKxx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
