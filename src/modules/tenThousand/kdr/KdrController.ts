import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kdrs")
export default class KdrController {
  @operation({
    summary: "Get Kdrs",
  })
  @get()
  static getKdrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kdr",
  })
  @post("{id}")
  static createKdr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
