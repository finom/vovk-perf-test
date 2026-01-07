import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kxx")
export default class KxxController {
  @operation({
    summary: "Get Kxx",
  })
  @get()
  static getKxx = procedure({
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
