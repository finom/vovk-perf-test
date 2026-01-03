import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nmws")
export default class NmwController {
  @operation({
    summary: "Get Nmws",
  })
  @get()
  static getNmws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nmw",
  })
  @post("{id}")
  static createNmw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
