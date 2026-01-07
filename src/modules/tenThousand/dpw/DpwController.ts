import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dpw")
export default class DpwController {
  @operation({
    summary: "Get Dpw",
  })
  @get()
  static getDpw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dpw",
  })
  @post("{id}")
  static createDpw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
