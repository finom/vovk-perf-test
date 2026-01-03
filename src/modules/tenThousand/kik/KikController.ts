import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kiks")
export default class KikController {
  @operation({
    summary: "Get Kiks",
  })
  @get()
  static getKiks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kik",
  })
  @post("{id}")
  static createKik = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
