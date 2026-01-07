import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kyp")
export default class KypController {
  @operation({
    summary: "Get Kyp",
  })
  @get()
  static getKyp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kyp",
  })
  @post("{id}")
  static createKyp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
