import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kpw")
export default class KpwController {
  @operation({
    summary: "Get Kpw",
  })
  @get()
  static getKpw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kpw",
  })
  @post("{id}")
  static createKpw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
