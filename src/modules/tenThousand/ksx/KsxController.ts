import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ksxes")
export default class KsxController {
  @operation({
    summary: "Get Ksxes",
  })
  @get()
  static getKsxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ksx",
  })
  @post("{id}")
  static createKsx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
