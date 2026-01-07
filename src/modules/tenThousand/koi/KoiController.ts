import { procedure, prefix, get, post, operation } from "vovk";

@prefix("koi")
export default class KoiController {
  @operation({
    summary: "Get Koi",
  })
  @get()
  static getKoi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Koi",
  })
  @post("{id}")
  static createKoi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
