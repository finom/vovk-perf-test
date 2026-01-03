import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kyps")
export default class KypController {
  @operation({
    summary: "Get Kyps",
  })
  @get()
  static getKyps = procedure({
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
