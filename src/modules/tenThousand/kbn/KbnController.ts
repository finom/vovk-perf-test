import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kbn")
export default class KbnController {
  @operation({
    summary: "Get Kbn",
  })
  @get()
  static getKbn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kbn",
  })
  @post("{id}")
  static createKbn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
