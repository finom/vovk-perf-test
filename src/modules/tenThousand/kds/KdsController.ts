import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kds")
export default class KdsController {
  @operation({
    summary: "Get Kds",
  })
  @get()
  static getKds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kds",
  })
  @post("{id}")
  static createKds = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
