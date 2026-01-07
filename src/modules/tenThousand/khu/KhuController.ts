import { procedure, prefix, get, post, operation } from "vovk";

@prefix("khu")
export default class KhuController {
  @operation({
    summary: "Get Khu",
  })
  @get()
  static getKhu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Khu",
  })
  @post("{id}")
  static createKhu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
