import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kyds")
export default class KydController {
  @operation({
    summary: "Get Kyds",
  })
  @get()
  static getKyds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kyd",
  })
  @post("{id}")
  static createKyd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
