import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ike")
export default class IkeController {
  @operation({
    summary: "Get Ike",
  })
  @get()
  static getIke = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ike",
  })
  @post("{id}")
  static createIke = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
