import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kkps")
export default class KkpController {
  @operation({
    summary: "Get Kkps",
  })
  @get()
  static getKkps = procedure({
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
