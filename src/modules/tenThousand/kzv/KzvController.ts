import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kzvs")
export default class KzvController {
  @operation({
    summary: "Get Kzvs",
  })
  @get()
  static getKzvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kzv",
  })
  @post("{id}")
  static createKzv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
