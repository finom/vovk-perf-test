import { procedure, prefix, get, post, operation } from "vovk";

@prefix("vws")
export default class VwController {
  @operation({
    summary: "Get Vws",
  })
  @get()
  static getVws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Vw",
  })
  @post("{id}")
  static createVw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
