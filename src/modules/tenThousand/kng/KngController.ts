import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kng")
export default class KngController {
  @operation({
    summary: "Get Kng",
  })
  @get()
  static getKng = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kng",
  })
  @post("{id}")
  static createKng = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
