import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kns")
export default class KnsController {
  @operation({
    summary: "Get Kns",
  })
  @get()
  static getKns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kns",
  })
  @post("{id}")
  static createKns = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
