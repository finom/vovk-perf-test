import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kyg")
export default class KygController {
  @operation({
    summary: "Get Kyg",
  })
  @get()
  static getKyg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kyg",
  })
  @post("{id}")
  static createKyg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
