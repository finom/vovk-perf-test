import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kkp")
export default class KkpController {
  @operation({
    summary: "Get Kkp",
  })
  @get()
  static getKkp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kkp",
  })
  @post("{id}")
  static createKkp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
