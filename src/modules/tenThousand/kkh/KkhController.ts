import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kkh")
export default class KkhController {
  @operation({
    summary: "Get Kkh",
  })
  @get()
  static getKkh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kkh",
  })
  @post("{id}")
  static createKkh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
