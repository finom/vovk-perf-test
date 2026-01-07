import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kkn")
export default class KknController {
  @operation({
    summary: "Get Kkn",
  })
  @get()
  static getKkn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kkn",
  })
  @post("{id}")
  static createKkn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
