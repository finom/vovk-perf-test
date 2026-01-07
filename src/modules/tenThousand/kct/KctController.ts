import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kct")
export default class KctController {
  @operation({
    summary: "Get Kct",
  })
  @get()
  static getKct = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kct",
  })
  @post("{id}")
  static createKct = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
