import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ksw")
export default class KswController {
  @operation({
    summary: "Get Ksw",
  })
  @get()
  static getKsw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ksw",
  })
  @post("{id}")
  static createKsw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
