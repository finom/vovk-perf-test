import { procedure, prefix, get, post, operation } from "vovk";

@prefix("khus")
export default class KhuController {
  @operation({
    summary: "Get Khus",
  })
  @get()
  static getKhus = procedure({
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
