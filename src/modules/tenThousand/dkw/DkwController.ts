import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dkws")
export default class DkwController {
  @operation({
    summary: "Get Dkws",
  })
  @get()
  static getDkws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dkw",
  })
  @post("{id}")
  static createDkw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
