import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kkm")
export default class KkmController {
  @operation({
    summary: "Get Kkm",
  })
  @get()
  static getKkm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kkm",
  })
  @post("{id}")
  static createKkm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
